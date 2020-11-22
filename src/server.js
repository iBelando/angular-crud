const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'./dist/angular-crud'));
app.get('/*', function(req,res) {
  res.sendFile('index.html', { root: 'dist/angular-crud' });
});

app.listen(process.env.PORT || 8080);

console.log('Running!');
