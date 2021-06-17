const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Service runing at port ", port));

let films = [
  {
    id: 1,
    name: "film one",
    director: "first director",
    link: "http://www.adorocinema.com/filmes/filme-196885/",
  },
  {
    id: 2,
    name: "film two",
    director: "second director",
    link: "http://www.adorocinema.com/filmes/filme-222967/",
  },
];

app.get("/api/films", (req, res) => {
  res.send(JSON.stringify(films, null, 3));
});

app.get("/api/films/:id", (req, res) => {
  const film = films.find((film) => film.id === parseInt(req.params.id));

  if (film) {
    return res.send(film);
  }

  return res.status(404).send("Filme não existe.");
});
