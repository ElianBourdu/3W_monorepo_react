require('dotenv').config()
require('./db')();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const Fruit = require('./router/fruit');
const AgriRouter = require('./router/agriculteur');
const SignupRouter = require('./router/signup');
const SearchRouter = require('./router/search');


app.use(express.json());

app.use('',Fruit);
app.use('', AgriRouter);
app.use('',SignupRouter);
app.use('', SearchRouter);






app.listen(port, () => console.log('Listenning on port 8000'));

