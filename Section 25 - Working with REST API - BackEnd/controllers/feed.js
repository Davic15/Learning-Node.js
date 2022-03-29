//* http method and the name
exports.getPosts = (req, res, next) => {
    //* return a response in JSON format
    res.status(200).json({
        posts: [
            {
                _id: '1',
                title: 'First Post', 
                content: 'This is the First post!', 
                imageUrl:  'images/duck.jpg',
                creator: {
                    name: 'David',
                },
                createdAt: new Date()
            }
        ]
    });
};

//* Success resource was created
exports.createPost = (req, res, next) => {
    //* Create a post
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'Post created successfully',
        post: { _id: new Date().toISOString(), title: title, content: content, creator: {name: 'David', createdAt: new Date()} }
    });
}