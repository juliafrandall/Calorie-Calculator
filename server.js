var express = require('express');
var axios = require('axios')
var app = express();

// require middleware
require('./server/config/middleware.js')(app, express);

var config = {
    'Content-Type' : 'application/json',
        'x-app-id' : 'ed2424da',
        'x-app-key': 'dbd5130fcd189c62e8d13b0813428563'
}

app.post('/api/entry', function(request, response){
  var food = request.body.items
  console.log(food, "this is the food")
  axios({
    method: 'POST',
    url : 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    headers : config,
    data : {"query": food}
  })
  .then(function(response){
    console.log(response.data.foods[0].nf_calories)
  })
  .catch(function(error){
    console.log(error);
  })
})


//set and run the port and server
app.set('port',process.env.PORT || 9000);
var port = app.get('port');
app.listen(port);
console.log("Server listening on PORT",port);

//export app
module.exports = app;
