import "reflect-metadata";
import * as express from "express";
import pool from './utils/dbConnection.utils';

require('dotenv').config()
const app = express();

//Middlewares
app.use(express.json());



pool.query("SELECT NOW()", (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(row);
    }
});


//Import Routes
import userRoute from "./Routes/User.route";
import categoriesRoute from "./Routes/Categories.route";
import itemsRoute from "./Routes/Items.route";
import sellRoute from "./Routes/Sell.route";
import setupRoute from "./utils/Setup.route";

//Routes Middlewares
app.use("/customers", userRoute);
app.use("/categories", categoriesRoute);
app.use("/items", itemsRoute);
app.use("/sell", sellRoute);

app.use('/setup', setupRoute);

app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port ${process.env.PORT || 3000}`));

