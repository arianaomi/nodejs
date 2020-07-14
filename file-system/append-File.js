//
const fs = require("fs");

var appendFile = (url, data) => {
  fs.appendFile(url, data, "utf8", (error) => {
    if (error) return console.log(error);
    console.log("The string was appended to file");
  });
};

appendFile("hola.txt", "\nAgregando linea");
