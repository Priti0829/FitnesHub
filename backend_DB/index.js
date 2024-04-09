const express = require('express');
const cors = require('cors');
const connectToMongoDB = require('./db');
const port = 4000;


const app = express();

// connection to DB
connectToMongoDB();

// middlewares  
app.use(cors()); //for server running diff ports 
app.use(express.json());

app.get('/', (req, res) => {
	res.send("Hello anand ");
})

// using routes
app.use('/auth', require('./routes/auth'));
app.use('/disease', require('./routes/diseases'));


app.listen(port, (req, res) => {
	console.log(`Server is running on port${port}`);
})
