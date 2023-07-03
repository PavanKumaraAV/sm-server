import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ 
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

//Update 
router.patch("/:id/like", verifyToken, likePost);

export default router;


//npm i react-redux @reduxjs/toolkit redux-persist react-dropzone dotenv formik yup react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material