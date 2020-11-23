const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({ limit: '1024mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1024mb' }));

var routes = require('./routes/index');

app.use('/get_meta_data', routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
});

module.exports = app;