import { Router } from "express";
import ProductController from "../controller/ProductController";
const router = Router();

router.post("/create", ProductController.createProduct);

export default router;
