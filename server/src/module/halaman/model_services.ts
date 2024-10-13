import { sequelize, DataTypes } from "./../../db";

const WsModelBanner = sequelize.define("servies", {
  service_code: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  service_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  service_icon: {
    type: DataTypes.TEXT,
  },
  service_tarif: {
    type: DataTypes.INTEGER(),
  },
  }, {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  },
  );

  WsModelBanner.removeAttribute('id');

export default WsModelBanner;
