const express = require('express');
const app = express();
const port = 8080;

/*serving static files via middleware*/
app.use(express.static('dist'));

/*serving 'index.html' file on GET request*/
app.get('./', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);

console.log('listening to port: ' + port);