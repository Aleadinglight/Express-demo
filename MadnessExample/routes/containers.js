const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("All container");
});

app.get("/:id", (req, res) => {
    var id = parseInt(req.params.id);
    res.status(200).send("Container with id: "+ id);
});

app.post("", (req, res) => {
    res.status(200).send("Create container");
});

app.put("/:id", (req, res) => {
    res.status(200).send("Edit container");
});

app.delete("/:id", (req, res) => {
    res.status(200).send("Delete container");
});

module.exports = app;