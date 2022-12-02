var mongoose = require('mongoose');
const Schema = mongoose.Schema;



var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  postId: [{type: Schema.Types.ObjectId, ref: 'Post'}]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);