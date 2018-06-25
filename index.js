const express = require('express');
const app = express();

// Slash is the root of the websile
app.get('/', (req, res) => {
	// Send response
	res.send("Hello World");
});

app.get('/api/courses', (req, res) => {
	res.send([1, 2, 3]);
});

app.get('/api/post/:year/:month', (req, res) => {
	// req.params is an object
	res.send(req.params);
	// go to this address to see this query (behind ?) 
	// http://127.0.0.1:3000/api/post/2017/1?sortBy=name
	res.send(req.query);
});

// if process.env.PORT is set, we'll use it, otherwise we'll use 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));