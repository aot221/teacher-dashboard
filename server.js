const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'));

//Run web server for application on a designated port. Currently set up to work on localhost.
app.listen(port, () => console.log(`New Visions Dashboard listening on port ${port}!`));