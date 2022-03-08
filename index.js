const express = require('express');
require('dotenv').config();
const { PORT } = process.env;

app = express();

const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));