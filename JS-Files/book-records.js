const bookStorage = JSON.parse(localStorage.getItem("book")) || [];

function bookStore() {
  localStorage.setItem("book", JSON.stringify(bookStorage));
}

renderBooks();

const bookName = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const seeRecordButton = document.querySelector(".see-button");
const submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");
const hiddenRecords = document.querySelector(".inside-footer");

submitButton.addEventListener("click", () => {
  bookInformation();
  bookName.value = "";
  bookAuthor.value = "";
});

resetButton.addEventListener("click", () => {
  bookStorage.length = 0;
  localStorage.removeItem("book");
  renderBooks();
});

seeRecordButton.addEventListener("click", () => {
  if (
    hiddenRecords.style.display === "none" ||
    hiddenRecords.style.display === ""
  ) {
    hiddenRecords.style.display = "block";
    seeRecordButton.innerHTML = 'Hide Record';
  } else {
    hiddenRecords.style.display = "none";
    seeRecordButton.innerHTML = "See Books";
  }
});

function bookInformation() {
  const bName = bookName.value;
  const bAuthor = bookAuthor.value;
  const bookString = `          
            <p>${bName}</p>
            <p>${bAuthor}</p>`;
  bookStorage.unshift(bookString);
  bookStore();
  renderBooks();
}

function renderBooks() {
  let renderHTML = "";
  bookStorage.forEach((book, index) => {
    const bookHTML = book;
    const withButton = `<div class="records">${bookHTML}<button class="update">Update</button>
      <button onclick="
      bookStorage.splice(${index}, 1);
      bookStore();
      renderBooks();" class="delete">Delete</button>         
    </div>
    `;
    renderHTML += withButton;
  });
  document.querySelector(".records-container").innerHTML = renderHTML;
}
