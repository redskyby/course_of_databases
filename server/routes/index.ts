import { Router } from "express";
import ProductRoutes from "./ProductRoutes";
const router = Router();

router.use("/product", ProductRoutes);

export default router;
