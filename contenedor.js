const fs = require("fs");

class Contenedor {
  constructor(nameFile) {
    this.nameFile = nameFile;
   
  }
  async getAll() {
    try {
      const contenido = await fs.promises.readFile(this.nameFile, "utf-8");
      let productos= JSON.parse(contenido)
      console.log(productos)
      
      ;
    } catch ( error){
      console.log( error);
    }
  }
  async getRandom() {}
}
module.exports = { Contenedor };
