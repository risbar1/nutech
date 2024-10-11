import { sequelize, DataTypes } from "./../../db";


const WsModel = sequelize.define("password", {
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  }, {
  timestamps: false,
  schema: 'public',
  },
  );

WsModel.removeAttribute('id');

export default WsModel;
