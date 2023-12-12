import sequelize from "../db_sequelize";
import { Model, DataTypes } from "sequelize";

class Products extends Model {
    public productId!: number;
    public type!: string;
    public brand!: string;
    public description!: string;
    public priceUsd!: number;
    public priceRub!: number;
    public quantityInStock!: number;
}

class Sales extends Model {
    public salesId!: number;
    public saleDate!: Date;
}


class Seller extends Model{
    public sellerId!: number;
}

Products.init(
    {
        productId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING,
        },
        brand: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        priceUsd: {
            type: DataTypes.FLOAT,
        },
        priceRub: {
            type: DataTypes.FLOAT,
        },
        quantityInStock: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        modelName: "products",
    },
);


Sales.init(
    {
        salesId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        saleDate: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        modelName: "sales",
    },
);

Seller.init(
    {
        sellerId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    }, {
        sequelize,
        modelName: "seller",
    }
)

Seller.hasMany(Sales , {onDelete: "CASCADE"});
Sales.belongsTo(Seller);

Sales.belongsToMany(Products , { through: "SaleProducts", foreignKey: 'salesId'});
Products.belongsTo(Sales , { foreignKey: 'salesId'});


const models = { Products, Sales , Seller };
export default models;
