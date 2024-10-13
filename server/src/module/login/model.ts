import { sequelize, DataTypes } from "./../../db";


const WsModel = sequelize.define("akun", {
  email: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  profile_image: {
    type: DataTypes.TEXT,
  },
  hp: {
    type: DataTypes.STRING(15),
  },
  alamat: {
    type: DataTypes.STRING(255),
  },
  }, {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  },
  );

WsModel.removeAttribute('id');

export default WsModel;
