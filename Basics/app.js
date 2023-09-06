const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   if (req.url === "/") {
  //     res.end("Welcome to our homepage");
  //   }
  //   if (req.url === "/about") {
  //     res.end("Here is our short history");
  //   }
  //   res.end(`
  //     <h1>404 Error</h1>
  //     <p>Sumimasori... Something went wrong</p>
  //     <a href="/">back home</a>
  //     `);

  //   res.write("Welcome to our homepage");
  //   res.end();

  if (req.url === "/") {
    res.end("Welcome to our homepage");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.statusCode = 404; // Set the status code to 404 for page not found
    res.end(`
      <h1>404 Error</h1>
      <p>Sumimasori... Something went wrong</p>
      <a href="/">back home</a>
    `);
  }
});

server.listen(5000);
