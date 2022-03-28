//* http method and the name
exports.getPosts = (req, res, next) => {
    //* return a response in JSON format
    res.status(200).json({
        posts: [{ title: 'First Post', content: 'This is the First post!' }]
    });
};

//* Success resource was created
exports.createPost = (req, res, next) => {
    //* Create a post
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'Post created successfully',
        post: { id: new Date().toISOString(), title: title, content: content }
    });
}