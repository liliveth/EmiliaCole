const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});
app.use(express.static("public"));

app.get("/music", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/music.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/contact.html"));
});
app.listen(3000, () => {
  console.log("servidor ejecutandose en puerto 3000");
});
