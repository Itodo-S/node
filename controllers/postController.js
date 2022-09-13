const getPost = (req, res) => {
    res.status(200).json({ message: 'get post' })
}

const createPost = (req, res) => {
    res.status(200).json({ message: 'created post' })
}

const updatePost = (req, res) => {
    res.status(200).json({ message: 'update post' })
}

const deletePost = (req, res) => {
    res.status(200).json({ message: 'delete post' })
}

module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost,
}