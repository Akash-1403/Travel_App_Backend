import {addCategoryInDB, getCategoryFromDB} from "../controller/category.controller.js"
import express from "express";

const router = express.Router();

router.route("/")
    .post(addCategoryInDB)
    .get(getCategoryFromDB)
 
export default router;    