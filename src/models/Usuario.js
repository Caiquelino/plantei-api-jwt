import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs";
import { sequelize } from "../config/database.js";

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    nome: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Nome é obrigatório",
        },
      },
    },

    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Email é obrigatório",
        },
        isEmail: {
          msg: "Email inválido",
        },
      },
    },

    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [11, 11],
          msg: "O CPF deve conter exatamente 11 dígitos",
        },
        notEmpty: {
          msg: "CPF é obrigatório",
        },
      },
    },

    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Data de nascimento é obrigatória",
        },
        isDate: {
          msg: "Data de nascimento inválida",
        },
      },
    },

    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 100],
          msg: "A senha deve ter no mínimo 6 caracteres",
        },
      },
    },
  },
  {
    tableName: "usuarios",
    timestamps: true,

    /* hooks: {
      beforeCreate: async (usuario) => {
        if (usuario.senha) {
          usuario.senha = await bcrypt.hash(usuario.senha, 10);
        }
      },
      beforeUpdate: async (usuario) => {
        if (usuario.changed("senha")) {
          usuario.senha = await bcrypt.hash(usuario.senha, 10);
        }
      },
    }, */
  }
);

export default Usuario;
