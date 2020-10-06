import "reflect-metadata";
import * as express from "express";
import { Pool } from 'pg';

require('dotenv').config()
const app = express();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // ssl: {
    //     rejectUnauthorized: false
    // }
})

// pool.query("SELECT NOW()", (err, res) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//         console.log(row);
//     }
// });

// pool.query("SELECT * FROM country", (err, res) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//         console.log(row);
//     }
// });

// pool.query("INSERT INTO country(countryname) VALUES ('USA');", (err, res) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//         console.log(JSON.stringify(row));
//     }
// });

//Middlewares
app.use(express.json());

//Import Routes
import userRoute from "./Routes/User.route";
import categoriesRoute from "./Routes/Categories.route";
import itemsRoute from "./Routes/Items.route";
import sellRoute from "./Routes/Sell.route";

//Routes Middlewares
app.use("/customers", userRoute);
app.use("/categories", categoriesRoute);
app.use("/items", itemsRoute);
app.use("/sell", sellRoute);

app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port ${process.env.PORT || 3000}`));

