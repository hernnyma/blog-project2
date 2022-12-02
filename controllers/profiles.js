const Post = require('../models/post')
const User = require('../models/user');

module.exports = {
    index,
}

function index(req, res) {
    let user = req.user
    User.findOne({googleId: user.googleId}).exec(function(err, users){
        Post.find({_id: users.postId}).exec(function(err, posts){
            res.render('profiles/index', {users, posts})
        })
    })
  }