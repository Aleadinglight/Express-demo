const express = require("express");
const app = express();
const config = require("./src/config/config");
const path = require("path");

app.use(express.json());

app.get("/api/location", (req, res) => {
    res.status(200).send("All location");
});

app.get("/api/location/:id", (req, res) => {
    var id = parseInt(req.params.id);
    res.status(200).send("Location with id: "+ id);
});

app.post("/api/location", (req, res) => {
    res.status(200).send("Create location");
});

app.put("/api/location/:id", (req, res) => {
    res.status(200).send("Edit location");
});

app.delete("/api/location/:id", (req, res) => {
    res.status(200).send("Delete location");
});

app.get("*", (req, res) => {
    res.status(404).send("404 not found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
