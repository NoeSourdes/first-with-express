//1)

const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000; // ou 80

// app.get('/', (req, res) => {
//     res.send('<h1>bonjour Lucas</h1>')
// })

// app.listen(port, () => {
//     console.log('votre site est à jour sur le port 3000 !!');
// })

//2)

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "routes")));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.listen(port, () => {
  console.log("votre site est à jour sur le port 3000 !!");
});
