import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();


// localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.post('/.id', updatePost);
router.post('/:id', deletePost);

export default router;