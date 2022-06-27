const fs = require("fs");

class Contenedor {
  constructor(nameFile) {
    this.nameFile = nameFile;
  }
  async getAll() {
    try {
      const contenido = await fs.promises.readFile(this.nameFile, "utf-8");
      let productos = JSON.parse(contenido);
      console.log(productos);
      return productos;
    } catch (error) {
      console.log(error);
    }
  }
  async getRandom() {
    try {
      const contenido = await fs.promises.readFile(this.nameFile, "utf-8");
      let productos = JSON.parse(contenido);
      let id = () => {
        let result = Math.floor(Math.random() * productos.length);
        return result;
      };
      console.log(productos[id()]);
      return productos[id()];
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = { Contenedor };
