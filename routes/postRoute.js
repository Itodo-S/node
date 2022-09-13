const express = require('express');
const { getPost, createPost, updatePost, deletePost } = require('../controllers/postController');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.status(200).json({ message: 'get post' })
// })


// geting post
router.get('/', (getPost))

// create post
router.post('/', (createPost))

// updating post
router.put('/', (updatePost))

// deleting post 
router.delete('/', (deletePost))


module.exports = router;
