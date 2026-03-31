import sequelize from "../database/database.js";
import { DataTypes } from "sequelize";

const usuario = sequelize.define("Usuario",{
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    }
});

export default usuario