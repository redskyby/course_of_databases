import { Request, Response } from "express";
import models from "../models/models";
import {logger} from "sequelize/types/utils/logger";

class SellerController {
    async createSeller(req: Request, res: Response){
        try{
            const {id } = req.body;

            console.log(id)

            if(!id){
                return res.status(403).json({ message: "Введите id продавца." });
            }

            const check = await models.Seller.findOne({ where: {sellerId : id }});

            if(check){
                return res.status(403).json({ message: "Такой пользователь есть!" });
            }


            const seller = await models.Seller.create({where: {sellerId : id }})

            return res.status(200).json(seller);

        }catch (e) {
            res.status(404).json(e);
        }
    }
}

export default new SellerController();