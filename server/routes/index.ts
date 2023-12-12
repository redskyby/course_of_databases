import { Router } from "express";
import ProductRoutes from "./ProductRoutes";
import SellerRoutes from "./SellerRoutes";
const router = Router();

router.use("/product", ProductRoutes);
router.use("/seller", SellerRoutes);

export default router;
