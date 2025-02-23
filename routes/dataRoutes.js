import express from "express";
import { storeData, getData } from "../controllers/dataControllers.js";

const router = express.Router();

router.post("/storedata", storeData);
router.get("/get-data", getData);

export default router;
