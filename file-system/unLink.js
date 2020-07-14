const fs = require("fs");

var removeFile = (url) => {
    fs.unlink(url,(error)=>{
        if(error) return console.log(error)
        console.log(`${url} was delete`)
    })
};

removeFile("hola.txt");
