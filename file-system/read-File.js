const fs = require("fs");

fs.readFile("hola.txt", "utf8", (error, data) => {
  if (error) return console.log("No se puedo leer el archivo");
  console.log(data);
});
