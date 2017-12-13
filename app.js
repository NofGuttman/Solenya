let Express = require('express');
let app = Express();
const port = process.env.PORT || 3000;

app.use(Express.static('src'));

app.get('/', function(req, res) {
  res.send("index.html");
});

app.listen(port, function() {
  console.log("Running Server on PORT 3000");
});