const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("All trucks");
});

app.get("/:id", (req, res) => {
    var id = parseInt(req.params.id);
    res.status(200).send("Truck with id: "+ id);
});

app.post("", (req, res) => {
    res.status(200).send("Create truck");
});

app.put("/:id", (req, res) => {
    res.status(200).send("Edit truck");
});

app.delete("/:id", (req, res) => {
    res.status(200).send("Delete truck");
});

module.exports = app;