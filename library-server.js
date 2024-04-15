const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  const students = [
    { fName: "Samm", lName: "Caagbay" },
    { fName: "Seth", lName: "Agbay" },
    { fName: "Samnyll", lName: "Fuscablo" },
  ];
  res.render("students-section", { students });
});

app.get("/students", (req, res) => {
  const students = [
    { fName: "Samm", lName: "Caagbay" },
    { fName: "Seth", lName: "Agbay" },
    { fName: "Samnyll", lName: "Fuscablo" },
  ];
  res.render("students-section", { students });
});

app.get("/librarians", (req, res) => {
  const librarians = [
    { fName: "Kleah", lName: "Alinob" },
    { fName: "Stevenz", lName: "Kagbay" },
    { fName: "Cream", lName: "Pomicpic" },
  ];
  res.render("librarian-section", { librarians });
});

app.get("/books", (req, res) => {
  const books = [
    { bName: "Lord of Rings", bAuthor: "Hogwarts" },
    { bName: "Harry Potter", bAuthor: "Stephen" },
    { bName: "Bruh Moments", bAuthor: "Samm" },
  ];
  res.render("book-section", { books });
});

//404 page
app.use((req, res) => {
  res.send("<p>404</p>");
});
