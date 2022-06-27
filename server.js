const { randomBytes } = require("crypto");
const express = require("express");
const fs = require("fs");
const app = express();
const { Contenedor } = require("./contenedor");

const contenedor = new Contenedor("productos.txt");

app.get("/productos", async (req, res) => {
  /* let result = await fs.promises.readFile('./productos.txt', "utf8");
  let productos= JSON.parse(result)
 console.log(productos) */
  let lista = await contenedor.getAll();
  console.log(lista);

  res.send(lista);
});
app.get("/productoRandom", async (req, res) => {
  let numRandom = await contenedor.getRandom();
  res.send(numRandom);
});

const server = app.listen(8080, () => {
  console.log("server is runing on port 8080");
});
server.on("error", (error) => console.log(error));
