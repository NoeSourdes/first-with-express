//1)

const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000; // ou 80
const { weather } = require("./utils/weather");

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
  res.render("home");
});

app.get("/jsonweather", (req, res) => {
  const { location } = req.query;

  weather(location, "m", (err, data) => {
    if (err) {
      console.log("la ville n'est pas existante");
    }
    res.send(data);
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("erreur, regarder le terminal");
});

app.listen(port, () => {
  console.log("votre site est à jour sur le port 3000 !!");
});
