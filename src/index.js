const express = require("express");
const cors = require("cors");
const { port } = require("./config");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.authenticate()
      .then(() => {
            console.log("Database Authenticated");
      })
      .catch((err) => {
            console.log(err);
      });

db.sync()
      .then(() => {
            console.log("Database Synced");
      })
      .catch((err) => {
            console.log(err);
      });

initModels();

app.listen(port, () => {
      console.log(`Server started at port ${port}`);
});

app.get("/", (req, res) =>
      res.status(200).json({
            message: "server it's OK",
      })
);
