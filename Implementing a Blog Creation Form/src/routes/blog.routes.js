import express from "express";
import { renderBlogForm } from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/createblog", renderBlogForm);

export default router;
