const express = require('express');
const server = express();
const port   = process.env.PORT || 9742;

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.use(express.static('.'));

server.listen(port, function() {
  console.log(`server started, listening on port ${port}`);
});
