const Post = require('../models/post')

module.exports = {
    index,
    create: createNew,
    show,
    delete: deletePost,
    update: updateEmote,
}

function index(req, res) {
    Post.find({}).populate('userId').exec(function(err,posts){
        res.render('posts/index', {posts, user: req.user})
    })
}

function createNew(req, res) {
    let user = req.user
    //add the userid and avatar to the post for reference
    Post.create(req.body, function(err, posts) {
        //associate post id with user and vice versa
        posts.userId.push(user.id)
        req.user.postId.push(posts.id)
        req.user.save()
        posts.save()
        res.redirect('/posts')
    })

}

function show(req, res) {
    console.log(req.params.id)
    Post.findById(req.params.id).populate('userId').populate({path:'reply', populate: 'userId'}).exec(function(err,posts){
        res.render('posts/show', {posts, user: req.user})
    })
}

function deletePost(req,res) {
    Post.findByIdAndDelete(req.params.id).exec(function(err){
        res.redirect('/profiles')
    })
}

function updateEmote(req,res) {
    let emoji = req.body.emoji
    let post = req.params.id
    Post.findOneAndUpdate({post},{emoji: emoji}, {new: true}).exec(function(err, posts){
        res.redirect(`/posts/${posts._id}`)
    })
}