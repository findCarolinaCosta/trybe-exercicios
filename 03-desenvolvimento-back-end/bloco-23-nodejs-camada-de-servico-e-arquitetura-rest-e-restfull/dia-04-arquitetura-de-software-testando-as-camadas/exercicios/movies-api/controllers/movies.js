const MoviesService = require("../services/movies");

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService.create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400).send("Dados inválidos");
  }

  /*
    Perceba que `middlewares`, ao invés de executar um `return` padrão,
    como outras funções, vão, na maior parte das vezes, devolver as
    funções passadas por parâmetro, através dos objetos `req, res, next`.

    No nosso caso, estamos utilizando os métodos `status()` e `send()`,
    de `res` (response) para escrever/devolver um valor para a
    requisição daquele `end-point`.
  */
  return res.status(201).send("Filme criado com sucesso!");
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await MoviesService.findById(id);

    if (!movie) {
      return res.status(404).send("Not Found");
    }

    return res.status(200).json(movie);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  create,
  findById,
};
