import { Request, Response } from "express";
import models from "../models/models";

interface LowerCasedReport {
    [key: string]: string;
}

class ProductController {
    async createProduct(req: Request, res: Response) {
        try {
            const {type , brand , description , priceUsd , priceRub , quantityInStock} = req.body;


            if(!type || !brand || !description || !priceUsd || !priceRub  || !quantityInStock){
                return res.status(403).json({ message: "Не все поля заполнены!" });
            }

            const lowerCasedReport: LowerCasedReport = {};

            for (const key in req.body) {
                if (Object.prototype.hasOwnProperty.call(req.body, key)) {
                    lowerCasedReport[key] = req.body[key].toLowerCase();
                }
            }

            const check = await models.Products.findOne({ where: { type: type ,  brand : brand} });

            if(check){
                return res.status(403).json({ message: "Такой товар есть" });
            }

            const ProductInData = await models.Products.create({type : type , brand : brand , description : description , priceUsd : priceUsd , priceRub : priceRub , quantityInStock : quantityInStock})


            return res.status(200).json(ProductInData);
        } catch (e) {
            res.status(404).json(e);
        }
    }
}

export default new ProductController();
