const path = require('path');
const express = require('express');
const app = express();
const { json } = require('express');
const port = 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const handlebars = require('handlebars');

// Connect to DB
db.connect();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(json());

// Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
const Handlebars = require('handlebars');
Handlebars.registerHelper('truncateWords', function(str, numWords) {
    if (!str) {
        return '';
    }

    const words = str.split(' ');
    if (words.length <= numWords) {
        return str;
    }

    const truncatedWords = words.slice(0, numWords);
    return truncatedWords.join(' ') + '...';
});
// Handlebars helper function to format price with commas
Handlebars.registerHelper('formatPrice', function(price) {
    return Number(price).toLocaleString('vn-VN', {style: 'currency', currency: 'VND'});
});

Handlebars.registerHelper('isRow', function (index) {
    return (index) % 3 === 0;
})



// Routes init
route(app);

app.listen(port, () => {
    console.log('App  listening on port ' + port);
});
