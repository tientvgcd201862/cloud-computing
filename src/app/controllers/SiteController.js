const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../until/mongoose');
class SiteController {
    // [GET] /news
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(err => {
                next(err);
            });

        //res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
