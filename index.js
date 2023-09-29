const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
const bannerInfo = require('./data/banner.json');
const chefInfo = require('./data/chefInfo.json');
const processingInfo = require('./data/FoodProcessing.json');

app.get(('/bannerInfo') , (req,res) =>{
   res.send(bannerInfo);
});
app.get(('/chefInfo') , (req,res) =>{
    res.send(chefInfo);
 })
 app.get(('/processingInfo') , (req,res) =>{
    res.send(processingInfo);
 })







app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})