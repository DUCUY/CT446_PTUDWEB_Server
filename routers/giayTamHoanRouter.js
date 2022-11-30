import express from "express";
import { createGiayTamHoan,deletee,deleteeAll,getAllGiayTamHoan } from "../controllers/giayTamHoanController.js";

const router = express.Router();
router.post("/", createGiayTamHoan);

router.get('/',getAllGiayTamHoan)
// router.post("/xoaAll",deleteeAll)

router.delete("/:id",deletee)

export default router;
