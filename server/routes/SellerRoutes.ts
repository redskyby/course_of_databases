import { Router } from "express";
import SellerController from "../controller/SellerController"
const router = Router();

router.post("/create", SellerController.createSeller);

export default router;