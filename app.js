const moyasar = require('moyasar');
const express = require('express');
const app = express()
require('dotenv').config();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { title: 'My Express App', moyasarSK:process.env.MOYASAR_PK });
})

app.get('/callback', async function (req, res) {
    let data = null;
    console.log(req.query);
    if (req.query.id) {
      const mo = new moyasar(process.env.MOYASAR_SK);
      data = await mo.payment.fetch(req.query.id);
    }
    res.render('callback', {title: "Payment", data});
  })
  

app.listen(process.env.port || 4000, ()=>{
    console.log('http://localhost:4000');
})

