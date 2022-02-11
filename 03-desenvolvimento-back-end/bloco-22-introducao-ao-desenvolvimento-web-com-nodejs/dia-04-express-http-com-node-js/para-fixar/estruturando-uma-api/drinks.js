const express = require("express");
const app = express();
const cors = require("cors");

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

const orderedList = drinks.sort((a, b) => a.name.localeCompare(b.name));

app.use(cors());

app.get("/drinks", (_req, res) => {
  return res.json(orderedList);
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
