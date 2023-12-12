import sequelize from "../db_sequelize";
import { Model, DataTypes } from "sequelize";

class Products extends Model {
    public id!: number;
    public type!: string;
    public brand!: string;
    public description!: string;
    public priceUsd!: number;
    public priceRub!: number;
    public quantityInStock!: number;
}

class Sales extends Model {
    public id!: number;
    public seller!: string;
    public saleDate!: Date;
}

Products.init(
    {
        id: {
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
        priseUsd: {
            type: DataTypes.FLOAT,
        },
        priseRub: {
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
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        seller: {
            type: DataTypes.STRING,
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

Products.hasMany(Sales, { foreignKey: 'productID' });
Sales.belongsTo(Products , { foreignKey: 'productID' });

export default { Products, Sales };
