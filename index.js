const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
const bannerInfo = require('./data/banner.json');
const chefInfo = require('./data/chefInfo.json');
const processingInfo = require('./data/FoodProcessing.json');
const recipeInfo = require('./data/recipeDetails.json');

app.get(('/bannerInfo'), (req, res) => {
    res.send(bannerInfo);
});
app.get(('/chefInfo'), (req, res) => {
    res.send(chefInfo);
});
app.get(('/processingInfo'), (req, res) => {
    res.send(processingInfo);
});
app.get(('/recipeInfo'), (req, res) => {
    res.send(recipeInfo);
});
app.get('/recipeInfo/:id', (req,res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedInfo = recipeInfo.find(i => parseInt(i.id) === id);
    res.send(selectedInfo);
  })
  app.get('/chefInfo/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    console.log(id);
    const informationChefs = recipeInfo.filter(i => parseInt(i.id) === id);
    res.send(informationChefs);
  })
  








app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})