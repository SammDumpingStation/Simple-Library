const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

const dbURI =
  "mongodb+srv://caagbaysamm:Golem42069@librarymanagementsystem.fdtzg6f.mongodb.net/?retryWrites=true&w=majority&appName=LibraryManagementSystem";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static("Public/CSS-Files"));
app.use(express.static("Public/Image-Files"));
app.use(express.static("Public/JS-Files"));

// app.use(morgan("dev"));

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
