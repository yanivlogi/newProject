const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')
const app = express();
const modelRoute = require('./model');
app.use(express.static(path.join(__dirname,"../build")));

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use(express.static('dist'))

app.use(function (req, res, next)
{

})

app.get('/api/checkHe')

app.listen(process.env.PORT || 3000, () => console.log(`Litsening pn port ${process.env.PORT || 3000}`))