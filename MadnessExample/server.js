const express = require("express");
const app = express();
const config = require("./src/config/config");
const path = require("path");

const api = require('./routes/api');


app.use(express.json());

app.use('/api', api); 

app.get("*", (req, res) => {
    res.status(404).send("404 not found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));