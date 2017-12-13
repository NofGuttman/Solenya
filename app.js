let Express = require('express');
let app = Express();

app.use(Express.static('src'));

app.get('/', function(req, res) {
  res.send("index.html");
});

app.listen(3000, function() {
  console.log("Running Server on PORT 3000");
});