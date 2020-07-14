/* Importando el modulo fs */
const fs = require("fs");

const createFile = (url, data) => {
  fs.writeFile(url, data, "utf8", (error) => {
    if (error) return console.log("No se puedo crear el archivo");
    console.log("Se creo el archivo");
  });
};
createFile("hola.txt", " Hello world from nodejs");
