import express from "express";
import getProducts from "../controller/produtos.Controler.js";
const router = express.Router();

router.get("/", getProducts)

export default router;