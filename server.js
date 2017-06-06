var express = require('express');
var axios = require('axios')
var app = express();
var dotenv = require('dotenv').config({path: '.env'});

// require middleware
require('./server/config/middleware.js')(app, express);

var config = {
    'Content-Type' : 'application/json',
        'x-app-id' : 'ed2424da',
        'x-app-key': 'dbd5130fcd189c62e8d13b0813428563'
}

// var config = {
//     'Content-Type' : 'application/json',
//         'x-app-id' : process.env.X_APP_ID,
//         'x-app-key': process.env.X_APP_KEY
// }

app.post('/api/entry', function(req, res){
  var food = req.body.items
  // console.log('food: ', food);
  axios({
    method: 'POST',
    url : 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    headers : config,
    data : {"query": food}
  })
  .then(function(response){
    // console.log('then:: ', response.data.foods[0].nf_calories)
    var item = {
      name : response.data.foods[0].food_name,
      cal  : response.data.foods[0].nf_calories
    }
    // console.log(item, "these are the item")
    res.send(item);
  })
  .catch(function(error){
    console.log('error')
  })
})


//set and run the port and server
app.set('port', process.env.PORT || 8000);
var port = app.get('port');
app.listen(port);
console.log("Server listening on PORT",port);

//export app
module.exports = app;
