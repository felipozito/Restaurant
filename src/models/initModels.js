const Table = require("./tables.models");
const Orders = require("./orders.models");
const initModels = () => {
      Table.hasMany(Orders, { foreignKey: "id_orders" });
      Orders.belongsTo(Table, { foreignKey: "id_tables" });
};

module.exports = initModels;
