const Toy = require('../models/Toy');
const { multipleMongooseToObject, mongooseToObject} = require('../../until/mongoose');
const {upload} = require("../../until/upload");
class MeController {
    // [GET] /me/stored/courses
    storedToys(req, res, next) {
        Toy.find({})
            .then(toys => res.render('me/stored-toys', {
                    toys: multipleMongooseToObject(toys)
                }))
            .catch(next);
    }
}

module.exports = new MeController();
