const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const toyRouter = require('./toy');
function route(app) {
    app.use('/search', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/toys', toyRouter);
    app.use('/', siteRouter);

}

module.exports = route;
