const librarianStorage = JSON.parse(localStorage.getItem("librarian")) || [];

function librarianStore() {
  localStorage.setItem("librarian", JSON.stringify(librarianStorage));
}

renderLibrarians();

const librarianFname = document.querySelector(".librarian-fname");
const librarianLname = document.querySelector(".librarian-lname");
const seeRecordButton = document.querySelector(".see-button");
const submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");
const hiddenRecords = document.querySelector(".inside-footer");

submitButton.addEventListener("click", () => {
  storingLibrarianInfo();
  librarianFname.value = "";
  librarianLname.value = "";
});

resetButton.addEventListener("click", () => {
  librarianStorage.length = 0;
  localStorage.removeItem("librarian");
  renderLibrarians();
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

function storingLibrarianInfo() {
  const fname = librarianFname.value;
  const lname = librarianLname.value;
  const infoHTML = `          
            <p>${fname}</p>
            <p>${lname}</p>`;
  librarianStorage.unshift(infoHTML);
  librarianStore();
  renderLibrarians();
}

function renderLibrarians() {
  let renderLibrarianHTML = "";
  librarianStorage.forEach((librarian, index) => {
    const librarianHTML = librarian;
    const withButton = `<div class="records">${librarianHTML}<button class="update">Update</button>
      <button onclick="
      librarianStorage.splice(${index}, 1);
      librarianStore();
      renderLibrarians();" class="delete">Delete</button>         
    </div>
    `;
    renderLibrarianHTML += withButton;
  });
  document.querySelector(".records-container").innerHTML = renderLibrarianHTML;
}


