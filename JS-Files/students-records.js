const studentStorage = JSON.parse(localStorage.getItem("student")) || [];

function studentStore() {
  localStorage.setItem("student", JSON.stringify(studentStorage));
};

renderStudents();

const studentFname = document.querySelector(".student-fname");
const studentLname = document.querySelector(".student-lname");
const seeRecordButton = document.querySelector(".see-button");
const submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");
const hiddenRecords = document.querySelector(".inside-footer");

submitButton.addEventListener("click", () => {
  studentInformation();
  studentFname.value = "";
  studentLname.value = "";
});

resetButton.addEventListener("click", () => {
  studentStorage.length = 0;
  localStorage.removeItem("student");
  renderStudents();
});

seeRecordButton.addEventListener("click", () => {
  if (
    hiddenRecords.style.display === "none" ||
    hiddenRecords.style.display === ""
  ) {
    hiddenRecords.style.display = "block";
    seeRecordButton.innerHTML = "Hide Record";
  } else {
    hiddenRecords.style.display = "none";
    seeRecordButton.innerHTML = "See Books";
  }
});

function studentInformation() {
  const fname = studentFname.value;
  const lname = studentLname.value;
  const studentString = `<p>${fname}</p><p>${lname}</p>`;
  studentStorage.unshift(studentString);
  studentStore();
  renderStudents();
};

function renderStudents() {
  let renderHTML = "";
  studentStorage.forEach((student, index) => {
    const studentHTML = student;
    const withButton = `<div class="records">${studentHTML}<button class="update">Update</button>
      <button onclick="
      studentStorage.splice(${index}, 1);
      studentStore();
      renderStudents();" class="delete">Delete</button>         
    </div>
    `;
    renderHTML += withButton;
  });
  document.querySelector(".records-container").innerHTML = renderHTML;
};
