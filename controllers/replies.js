const Post = require('../models/post')
const User = require('../models/user');

module.exports = {
    new: newReply
}

//i can just redirect to the current page with updated reply info
//populate to show reply users info
function newReply(req, res) {
    let user = req.user
    req.body.userId = user._id
    Post.findById(req.params.id).exec(function(err, posts) {
        posts.reply.push(req.body)
        posts.save(function(err) {
            res.redirect(`/posts/${posts._id}`)
        })
        //console.log(posts)
    })
    
}