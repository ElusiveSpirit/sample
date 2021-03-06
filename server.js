let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();

app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

let data = {};

app.post('/users', (req, res) => {

    if (data[req.body.email]) {
        data[req.body.email] += 1;
    } else {
        data[req.body.email] = 1;
    }

    res.send(data[req.body.email].toString());
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
