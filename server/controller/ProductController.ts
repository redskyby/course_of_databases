import { Request, Response } from "express";

class ProductController {
    async createProduct(req: Request, res: Response) {
        try {
            return res.json("hello");
        } catch (e) {
            res.status(404).json(e);
        }
    }
}

export default new ProductController();
