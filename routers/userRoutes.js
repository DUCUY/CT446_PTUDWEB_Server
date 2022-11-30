import express from "express";
import { createUser,compareUser, getAllUser, getUser ,deletee } from "../controllers/userController.js";

const router = express.Router();
router.post("/signUp", createUser);
router.post("/signIn", compareUser);
router.get('/',getAllUser);
router.get('/',getUser);
router.delete("/:id",deletee);

export default router;
