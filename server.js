const jsonServer = require("json-server");
const server = jsonServer.create();
const express = require("express");
const cors = require("cors");
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const PORT = process.eventNames.PORT || 5000;

server.use(cors());
server.use(express.static("build"));
server.use(middleware);
server.use("/api", router);
server.use((req, res) => res.sendStatus(404));
server.listen(PORT, () => {
  console.log("JSON server started on ", PORT);
});
