const mongoose = require('mongoose')
const { Schema } = mongoose


const NotesSchema = new Schema({
    name: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: ture,

    },
    tag: {
        type: String,
        default: "Genreal"

    },
    date: {
        type: Date,
        default: Date.now

    }

});

module.exports = mongoose.model('notes', NotesSchema)