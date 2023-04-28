const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Table = require("./tables.models");
const Orders = db.define("orders", {
      id_orders: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            primaryKey: true,
      },
      id_tables: {
            type: DataTypes.UUID,
            allowNull: false,
            References: {
                  model: Table,
                  key: "id_tables",
            },
      },
});

module.exports = Orders;
