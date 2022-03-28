const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { PORT } = process.env;
const { MONGO_URI } = process.env;

app = express();
//middleware 
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());

//db connnection

mongoose.connect(MONGO_URI);
mongoose.Promise = global.Promise;


//http://localhost:5000/api/ninjas
const routes = require('./routes/api');

app.use('/api', routes);


//error handling
app.use(function(err, req, res, next) {

    res.status(422).send({ Error: err.message });
});



const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));