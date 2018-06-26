const Joi = require('joi');
const express = require('express');
const app = express();

// use middleware
app.use(express.json());

const courses = [
	{ id:1, name: 'course1'},
	{ id:2, name: 'course2'},
	{ id:3, name: 'course3'},
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

// post request
// never trust what the client sends!
app.post('/api/courses', (req, res) => {
	// const result = validateCourse(req.body);
	const {error} = validateCourse(req.body);
	//if (result.error){
	if (error){
		res.status(400).send(result.error.details[0].message);
		// return cause we dont what the later to be executed.
		return;
	}
	console.log(result);
	
	const course = {
		id: courses.length +1,
		name: req.body.name
	};
	courses.push(course);
	console.log(course); 
	res.send(course);
});

app.get('/api/post/:year/:month', (req, res) => {
	// req.params is an object
	res.send(req.params);
	// go to this address to see this query (behind ?) 
	// http://127.0.0.1:3000/api/post/2017/1?sortBy=name
	res.send(req.query);
});

// Modify an object
app.put('/api/courses/:id',(req, res) => {
	// Look up the course
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course){
		// If not existing, return 404
		res.status(404).send("Course's id not found!");
		return;
	}
	// Validate
	// If invalid, return 400 - bad request
	// const result = validateCourse(req.body);
	const {error} = validateCourse(req.body);
	//if (result.error){
	if (error){
		res.status(400).send(result.error.details[0].message);
		// return cause we dont what the later to be executed.
		return;
	}
	
	// If valid, update te course
	course.name = req.body.name;
	// Return update course
	res.send(course);
});

app.delete('/api/courses/:id', (req, res) =>{
	// Look up the course
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course){
		// If not existing, return 404
		res.status(404).send("Course's id not found!");
		return;
	}
	// Delete 
	const index = courses.indexOf(course);
	courses.splice(index, 1);
	res.send(course)
});

function validateCourse(course){
	const schema = {
		name: Joi.string().min(3).required()
	};
	return Joi.validate(course, schema);
}

// if process.env.PORT is set, we'll use it, otherwise we'll use 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));











