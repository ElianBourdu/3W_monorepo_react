require('dotenv').config()
require('./db')();
const Agriculteur = require('./model/Agriculteur')
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());


// app.get('api/fruits', (req, res) =>{
//   res.send(fruit)
// });
// app.get('/api/fruits/:id', (req,res) =>{
//   const id = req.params.id
//   const fruit = fruits[id-1]
//   res.send(fruit);
// })

app.post('/agriculteurs', async (req, res) =>{
   const agri = new Agriculteur({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    localisation:req.body.localisation
   })
   
  await agri.save() 
  res.send(agri);
   
})



app.listen(port, () => console.log('Listenning on port 8000'));

