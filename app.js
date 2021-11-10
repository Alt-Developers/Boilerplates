const express = require("express");

const app = express();

app.set("views", "html");
app.set("view engine", "ejs");
app.use(express.static("assets"));

app.use("/", (req, res, next) => {
  res.render("errors/pagenotfound");
});

app.listen(3000);
// app.listen(process.env.PORT || port);
