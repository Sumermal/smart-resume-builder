// SAVE DATA FUNCTION
function saveData(key, value) {
  localStorage.setItem(key, value);
}

// LOAD DATA FUNCTION
function loadData(key) {
  return localStorage.getItem(key);
}

// NAME
// NAME
const nameInput = document.getElementById("name-input");

const previewName = document.getElementById("preview-name");

// LOAD SAVED NAME
const savedName = loadData("name");

if (savedName) {
  nameInput.value = savedName;

  previewName.innerText = savedName;
}

// SAVE + UPDATE
nameInput.addEventListener("input", function () {
  const value = nameInput.value || "John Doe";

  previewName.innerText = value;

  saveData("name", value);
});

// ROLE
const roleInput = document.getElementById("role-input");

const previewRole = document.getElementById("preview-role");

// LOAD SAVED ROLE
const savedRole = loadData("role");

if (savedRole) {
  roleInput.value = savedRole;

  previewRole.innerText = savedRole;
}

// SAVE + UPDATE
roleInput.addEventListener("input", function () {
  const value = roleInput.value || "Frontend Developer";

  previewRole.innerText = value;

  saveData("role", value);
});

// ABOUT
const aboutInput = document.getElementById("about-input");

const previewAbout = document.getElementById("preview-about");

// LOAD SAVED ABOUT
const savedAbout = loadData("about");

if (savedAbout) {
  aboutInput.value = savedAbout;

  previewAbout.innerText = savedAbout;
}

// SAVE + UPDATE
aboutInput.addEventListener("input", function () {
  const value = aboutInput.value || "Your about section will appear here.";

  previewAbout.innerText = value;

  saveData("about", value);
});

// GITHUB
const githubInput = document.getElementById("github-input");

const previewGithub = document.getElementById("preview-github");

// LOAD SAVED GITHUB
const savedGithub = loadData("github");

if (savedGithub) {
  githubInput.value = savedGithub;

  previewGithub.innerText = `GitHub: ${savedGithub}`;

  previewGithub.href = savedGithub;
}

// SAVE + UPDATE
githubInput.addEventListener("input", function () {
  const value = githubInput.value || "github.com/johndoe";

  previewGithub.innerText = `GitHub: ${value}`;

  previewGithub.href = githubInput.value;

  saveData("github", value);
});

// LINKEDIN
const linkedinInput = document.getElementById("linkedin-input");

const previewLinkedin = document.getElementById("preview-linkedin");

// LOAD SAVED LINKEDIN
const savedLinkedin = loadData("linkedin");

if (savedLinkedin) {
  linkedinInput.value = savedLinkedin;

  previewLinkedin.innerText = `LinkedIn: ${savedLinkedin}`;

  previewLinkedin.href = savedLinkedin;
}

// SAVE + UPDATE
linkedinInput.addEventListener("input", function () {
  const value = linkedinInput.value || "linkedin.com/in/johndoe";

  previewLinkedin.innerText = `LinkedIn: ${value}`;

  previewLinkedin.href = linkedinInput.value;

  saveData("linkedin", value);
});

// EXPERIENCE
const experienceInput = document.getElementById("experience-input");

const previewExperience = document.getElementById("preview-experience");

// LOAD SAVED EXPERIENCE
const savedExperience = loadData("experience");

if (savedExperience) {
  experienceInput.value = savedExperience;

  previewExperience.innerText = savedExperience;
}

// SAVE + UPDATE
experienceInput.addEventListener("change", function () {
  const value = experienceInput.value || "Fresher";

  previewExperience.innerText = value;

  saveData("experience", value);
});

// SKILLS
const skillsInput = document.getElementById("skills-input");
const previewSkills = document.getElementById("preview-skills");

skillsInput.addEventListener("input", function () {
  const skillsArray = skillsInput.value.split(",");

  previewSkills.innerHTML = "";

  skillsArray.forEach(function (skill) {
    const cleanSkill = skill.trim();

    if (cleanSkill !== "") {
      const skillTag = document.createElement("span");

      skillTag.classList.add("skill-tag");

      skillTag.innerText = cleanSkill;

      previewSkills.appendChild(skillTag);
    }
  });
});

// CURRENT EDIT PROJECT
let currentEditProject = null;

// PROJECTS
const projectTitleInput = document.getElementById("project-title-input");

const projectDescriptionInput = document.getElementById(
  "project-description-input",
);

const addProjectBtn = document.getElementById("add-project-btn");

const previewProjects = document.getElementById("preview-projects");

addProjectBtn.addEventListener("click", function () {
  const title =
    projectTitleInput.value;

const description =
    projectDescriptionInput.value;


if(title === "" || description === ""){

    alert("Please fill all project fields");

    return;
}


// =========================
// UPDATE EXISTING PROJECT
// =========================

if(currentEditProject){

    currentEditProject.querySelector(
        ".project-title"
    ).innerText = title;

    currentEditProject.querySelector(
        ".project-description"
    ).innerText = description;

    // RESET
    currentEditProject = null;

    addProjectBtn.innerText =
        "Add Project";

}


// =========================
// CREATE NEW PROJECT
// =========================

else{

    const projectCard =
        document.createElement("div");

    projectCard.classList.add(
        "project-card"
    );

    projectCard.innerHTML = `

        <div class="project-header">

            <h3 class="project-title">

                ${title}

            </h3>

            <div>

                <button class="edit-project-btn">

                    Edit

                </button>

                <button class="delete-project-btn">

                    Delete

                </button>

            </div>

        </div>

        <p class="project-description">

            ${description}

        </p>

    `;

    previewProjects.appendChild(
        projectCard
    );

    // DELETE
    const deleteBtn =
        projectCard.querySelector(
            ".delete-project-btn"
        );

    deleteBtn.addEventListener(
        "click",
        function(){

            projectCard.remove();

        }
    );

    // EDIT
    const editBtn =
        projectCard.querySelector(
            ".edit-project-btn"
        );

    editBtn.addEventListener(
        "click",
        function(){

            const projectTitle =
                projectCard.querySelector(
                    ".project-title"
                ).innerText;

            const projectDescription =
                projectCard.querySelector(
                    ".project-description"
                ).innerText;

            projectTitleInput.value =
                projectTitle;

            projectDescriptionInput.value =
                projectDescription;

            currentEditProject =
                projectCard;

            addProjectBtn.innerText =
                "Update Project";

        }
    );

}


// CLEAR INPUTS
projectTitleInput.value = "";

projectDescriptionInput.value = "";
});

// IMAGE UPLOAD
const imageInput = document.getElementById("image-input");

const previewImage = document.getElementById("preview-image");

imageInput.addEventListener("change", function () {
  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      previewImage.src = e.target.result;

      previewImage.style.display = "block";
    };

    reader.readAsDataURL(file);
  }
});

// DOWNLOAD PDF
const downloadBtn = document.getElementById("download-btn");

const resumeContent = document.getElementById("resume-content");

downloadBtn.addEventListener("click", async () => {
  const canvas = await html2canvas(resumeContent, {
    scale: 2,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jspdf.jsPDF("p", "mm", "a4");

  // A4 SIZE
  const pdfWidth = 210;
  const pdfHeight = 297;

  // IMAGE SIZE
  const imgWidth = pdfWidth;

  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;

  let position = 0;

  // FIRST PAGE
  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

  heightLeft -= pdfHeight;

  // ADD EXTRA PAGES IF CONTENT IS LARGE
  while (heightLeft > 0) {
    position = heightLeft - imgHeight;

    pdf.addPage();

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

    heightLeft -= pdfHeight;
  }

  pdf.save("resume.pdf");
});

// THEME BUTTON
const themeToggle = document.getElementById("theme-toggle");

// TOGGLE THEME
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // CHANGE BUTTON TEXT
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.innerText = "☀️ Light Mode";
  } else {
    themeToggle.innerText = "🌙 Dark Mode";
  }
});

// TEMPLATE SELECT
const templateSelect = document.getElementById("template-select");

// RESUME CONTENT
const resumeTemplate = document.getElementById("resume-content");

// LOAD SAVED TEMPLATE
const savedTemplate = loadData("template");

if (savedTemplate) {
  templateSelect.value = savedTemplate;

  resumeTemplate.classList.remove(
    "modern-template",
    "minimal-template",
    "professional-template",
  );

  resumeTemplate.classList.add(`${savedTemplate}-template`);
}

// CHANGE TEMPLATE
templateSelect.addEventListener("change", function () {
  // REMOVE OLD CLASSES
  resumeTemplate.classList.remove(
    "modern-template",
    "minimal-template",
    "professional-template",
  );

  // GET VALUE
  const selectedTemplate = templateSelect.value;

  // ADD CLASS
  resumeTemplate.classList.add(`${selectedTemplate}-template`);

  // SAVE
  saveData("template", selectedTemplate);
});

// AI SUMMARY BUTTON
const generateSummaryBtn =
    document.getElementById(
        "generate-summary-btn"
    );


// GENERATE AI SUMMARY
generateSummaryBtn.addEventListener(
    "click",

    function(){

        // GET VALUES
        const role =
            roleInput.value || "Developer";

        const skills =
            skillsInput.value || "HTML, CSS, JavaScript";

        const experience =
            experienceInput.value || "Fresher";


        // DIFFERENT AI-STYLE TEMPLATES
        const summaries = [

            `Passionate ${role} with ${experience} experience. Skilled in ${skills}. Dedicated to building modern and user-friendly applications.`,

            `${role} with strong knowledge of ${skills}. Passionate about problem-solving, clean UI design, and creating responsive web applications.`,

            `Enthusiastic ${role} experienced in ${skills}. Focused on building scalable, high-performance, and visually appealing projects.`,

            `Creative and detail-oriented ${role} with expertise in ${skills}. Interested in developing innovative and efficient digital solutions.`

        ];


        // RANDOM SUMMARY
        const randomSummary =

            summaries[
                Math.floor(
                    Math.random() * summaries.length
                )
            ];


        // UPDATE ABOUT SECTION
        aboutInput.value =
            randomSummary;

        previewAbout.innerText =
            randomSummary;

    }
);


