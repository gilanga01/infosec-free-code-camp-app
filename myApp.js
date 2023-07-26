const express = require('express');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(` 🥦Useful programmer on Information Security App server started on Port ${PORT}`);
})














































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(` 🥦Useful programmer on Information Security App server started on Port ${port}`);
});
