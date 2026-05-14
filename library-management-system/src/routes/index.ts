import express from "express";

import{
    getBook,
    addBook,
} from "../controllers/controller";

const router = express.Router();
router.get("/book", getBook);
router.post("/book", addBook);

export default router;