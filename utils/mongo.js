const mongoose = require('mongoose')

module.exports.mongoConnect = function () {
    return mongoose.connect('mongodb://localhost:27017/mongo-js-tester', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

