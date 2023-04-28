const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Table = db.define("table", {
      id_tables: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            primaryKey: true,
      },
      name: {
            type: DataTypes.STRING,
            allowNull: false,
      },
});

module.exports = Table;
