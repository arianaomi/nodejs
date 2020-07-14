
/* Importando un  modulo/API 
    sintaxis: 
    const modulo/API = require('fs')

    -const porque no se cambia
*/
const fs = require("fs");

/*  Function to read a file*/
function readFile(cb) {
  fs.readFile("./file.txt", "utf8", function (error, data) {
    if (error) throw error;
    cb(data);
  });
}
readFile(function (data) {
  console.log(data);
});

/* Function to create a file */

function writeFile(cb = () => {}) {
  fs.writeFile(
    "./writeFile.txt",
    "Creando un txt con node js 😆😎",
    "utf8",
    (error) => {
      if (error) throw error;
      cb("The file has been saved 😎");
    }
  );
}
writeFile((message) => console.log(message));


