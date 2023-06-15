const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const bookingRoutes = require("./routes/booking");

app.use(cors());

app.use(bodyParser.json({ extended: false }));

app.use(bookingRoutes);

app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
