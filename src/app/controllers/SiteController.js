const Toy = require('../models/Toy');
const { multipleMongooseToObject } = require('../../until/mongoose');
class SiteController {
    // [GET] /news
    index(req, res, next) {

        Toy.find({})
            .then(toys => {
                res.render('home', {
                    toys: multipleMongooseToObject(toys),
                });
            })
            .catch(err => {
                next(err);
            });

        //res.render('home');
    }
}

module.exports = new SiteController();
