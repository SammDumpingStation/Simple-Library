const express = require("express");
const mysql = require("mysql2");

const app = express();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Golempekkawizard69",
  database: "LibrarySystem",
});

pool.query("SELECT * FROM students", (error, results, fields) => {
  if (error) {
    console.error("Error executing SQL query:", error);
    return;
  }

  results.forEach((student) => {
    console.log(`ID: ${student.students_id}`);
    console.log(`First Name: ${student.first_name}`);
    console.log(`Last Name: ${student.last_name}`);
    console.log("---");
  });
});
app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static("Public/CSS-Files"));
app.use(express.static("Public/Image-Files"));
app.use(express.static("Public/JS-Files"));

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
