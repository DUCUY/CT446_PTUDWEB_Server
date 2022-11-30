import express from "express";
import { createGiayVayVon,deletee,deleteeAll,getAllGiayVayVon } from "../controllers/giayVayVonController.js";

const router = express.Router();
router.post("/", createGiayVayVon);

router.get('/',getAllGiayVayVon)
router.delete("/:id",deletee)

export default router;
