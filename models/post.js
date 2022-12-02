const { Schema } = require('mongoose')
var mongoose = require('mongoose')

var replySchema = new Schema({
    content: String,
    emoji: String,
    userId: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamps: true
})

var postSchema = new mongoose.Schema({
    title: String,
    content: String,
    reply: [replySchema],
    emoji: String,
    userId: [{type: Schema.Types.ObjectId, ref: 'User'}],

}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
module.exports = mongoose.model('Reply', postSchema)