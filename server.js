const express = require("express");
const fs = require("fs");
const app = express();
const {Contenedor} = require('./contenedor')


app.get("/productos", (req, res) => {
    let contenedor = new Contenedor('productos.txt')
  /* let result = await fs.promises.readFile('./productos.txt', "utf8");
  let productos= JSON.parse(result)
 console.log(productos) */
  let lista = contenedor.getAll()
  console.log(lista)
 
  res.send(lista);
});
app.get("/productoRamdom", (req, res) => {
  res.send("Hola gente esta es la ruta!!");
});

const server = app.listen(8080, () => {
  console.log("server is runing on port 8080");
});
server.on("error", (error) => console.log(error));
