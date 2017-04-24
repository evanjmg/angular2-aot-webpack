
var express = require('express');
var path = require('path');
var compression = require('compression');
var app = express();
var port = process.env.PORT || 9000;
var staticPath = path.resolve(__dirname, '../dist');
app.use(compression())
app.use(express.static(staticPath));

app.get('*', function (req, res) {
  res.header({ 'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': 0 });
  res.sendFile(path.join(staticPath, 'index.html'));
});

var server = app.listen(port, function () {
  console.log('server listening on port ' + port);
});
