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

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
