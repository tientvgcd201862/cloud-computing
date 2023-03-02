const meRouter = require('./me');
const siteRouter = require('./site');
const toyRouter = require('./toy');
function route(app) {
    app.use('/me', meRouter);
    app.use('/toys', toyRouter);
    app.use('/', siteRouter);

}

module.exports = route;
