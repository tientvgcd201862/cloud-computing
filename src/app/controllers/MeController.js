const Course = require('../models/Course');
const { multipleMongooseToObject, mongooseToObject} = require('../../until/mongoose');
const {upload} = require("../../until/upload");
class MeController {
    // [GET] /me/stored/courses
    storedToys(req, res, next) {
        Course.find({})
            .then(toys => res.render('me/stored-toys', {
                    toys: multipleMongooseToObject(toys)
                }))
            .catch(next);
    }
}

module.exports = new MeController();
