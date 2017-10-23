const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path")

const port = process.env.port || 8080;
const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();

app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

require("./build/dev-server")(app);

app.get("*", (req, res) => {
  res.write(indexHTML);
  res.end();
});


app.listen(port, () => {
  console.log(`server is started on the port ${port}`);
})