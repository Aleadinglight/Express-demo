const express = require('express');
const app = express();

const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' },
];

// Slash is the root of the websile
app.get('/', (req, res) => {
	// Send response
	res.send("Hello World");
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course)
		// 404 object not found
		res.status(404).send("Course's id not found!");
	else
		res.send(course);
});


app.get('/api/post/:year/:month', (req, res) => {
	// view on server (terminal)
	console.log(req.params);
	console.log(req.query);

	// req.params is an object
	// go to this address to see this query (behind ?) 
	// http://127.0.0.1:3000/api/post/2017/1?sortBy=name

	// sent to client (browser)
	const { params, query } = req;
	res.send({ params, query });
});

// if process.env.PORT is set, we'll use it, otherwise we'll use 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));











