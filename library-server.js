const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  res.render("students-section");
});

app.get("/students", (req, res) => {
  res.render("students-section");
});

app.get("/librarians", (req, res) => {
  res.render("librarian-section");
});

app.get("/books", (req, res) => {
  res.render("book-section");
});

//404 page
app.use((req, res) => {
  res.send("<p>404</p>");
});
