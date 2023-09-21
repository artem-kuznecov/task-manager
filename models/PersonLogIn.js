var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const Person = mongoose.model(
    'persons',
    new Schema({
        person: {
            type: String,
            required: true
        },
        date: {
            type: Date,
        },
        time: {
            type: String,
        }
    }),
    'persons'
)

module.exports.schema = Person