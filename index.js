const express = require('express');
const app = express();

// Slash is the root of the websile
app.get('/', (req, res) => {
	// Send response
	res.send("Hello World");
});

app.listen(3000, () => console.log('Listening on port 3000'));