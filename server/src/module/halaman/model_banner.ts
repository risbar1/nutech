import { sequelize, DataTypes } from "./../../db";

const WsModelBanner = sequelize.define("banner", {
  banner_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  banner_image: {
    type: DataTypes.TEXT,
  },
  }, {
  timestamps: true,
  schema: 'public',
  freezeTableName: true,
  },
  );

  WsModelBanner.removeAttribute('id');

export default WsModelBanner;
