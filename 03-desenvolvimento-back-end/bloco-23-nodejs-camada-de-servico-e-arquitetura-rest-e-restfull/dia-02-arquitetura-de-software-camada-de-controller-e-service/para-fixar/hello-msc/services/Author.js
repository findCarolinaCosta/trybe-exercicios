const Author = require("../models/Author");

const getAll = async () => {
  const authors = await Author.getAll();

  return authors;
};

const findById = async (id) => {
  const author = await Author.findById(id);

  //comunicando ao controller toda vez que algum erro de domínio acontece
  if (!author) {
    return {
      error: {
        code: "notFound",
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }

  return author;
};

const createAuthor = async ({ firstName, middleName, lastName }) => {
  // Buscamos um autor com o mesmo nome completo que desejamos criar
  const existingAuthor = await Author.findByName({
    firstName,
    middleName,
    lastName,
  });
  // Caso essa pessoa autora já exista, retornamos um objeto de erro informando
  // que não é possível criar a pessoa autora pois ele já existe
  if (existingAuthor) {
    return {
      error: {
        code: "alreadyExists",
        message: "Uma pessoa autora já existe com esse nome",
      },
    };
  }

  const serializeDBNorm = {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
  };
  const author = await Author.createAuthor(serializeDBNorm);

  return author;
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
