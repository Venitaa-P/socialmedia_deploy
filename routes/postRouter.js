const postController = require('../controller/postController')
const router = require('express').Router()

router.get('/api/posts', postController.getAllPosts)
router.get('/api/posts/:id', postController.getSinglePost)
router.post('/api/posts', postController.addNewPost)
router.put('/api/posts', postController.updatePost)
router.delete('/api/posts/:id', postController.deletePost)




module.exports = router