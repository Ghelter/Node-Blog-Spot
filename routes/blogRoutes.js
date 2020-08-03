const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();


// Blog routes

router.get('/', blogController.blog_index);
// saves the data form to the database and redirects user to the homepage
router.post('/', blogController.blog_create_post);
router.get('/create', blogController.blog_create_get);
//request the blog id from user click from DB
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;