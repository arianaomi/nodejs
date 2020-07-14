//
const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
  //console.log(request.url);
  //console.log(request.method);

  let parsed = url.parse(request.url);
  let pathname = parsed.pathname;
  let method = request.method;

  console.log("Nos mandaron a llamar ");

  response.writeHead("200", {
    "Content-Type": "text/html",
  });

  if (pathname === "/" && method === "GET") {
    response.write(
      "<h1>Hola mundo desde un servidor en node usando metodo GET</h1>"
    );
    response.end();
  } else if (pathname === "/" && method == "POST") {
    response.write(
      "<h1>Hola mundo desde un servidor en node usando metodo POST</h1>"
    );
    response.end();
  } else if (pathname === "/adios" && method == "GET") {
    response.write("<h1>Bye usando metodo GET</h1>");
    response.end();
  } else if (pathname === "/adios" && method == "POST") {
    response.write("<h1>Bye usando metodo POST</h1>");
    response.end();
  } else {
    response.write("<h1>Not found</h1>");
    response.end();
  }
});

server.listen("8080", () => {
  console.log("El servidor esta escuchando");
});


