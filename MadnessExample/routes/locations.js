const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("All location");
});

app.get("/:id", (req, res) => {
    var id = parseInt(req.params.id);
    res.status(200).send("Location with id: "+ id);
});

app.post("", (req, res) => {
    res.status(200).send("Create location");
});

app.put("/:id", (req, res) => {
    res.status(200).send("Edit location");
});

app.delete("/:id", (req, res) => {
    res.status(200).send("Delete location");
});

module.exports = app;