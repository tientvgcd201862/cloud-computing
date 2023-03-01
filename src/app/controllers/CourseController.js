const Course = require('../models/Course');
const { multipleMongooseToObject, mongooseToObject} = require('../../until/mongoose');
const {upload} = require("../../until/upload");
class SiteController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {course: mongooseToObject(course)});
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next);
        res.send
    }


}

module.exports = new SiteController();
