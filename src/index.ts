import "reflect-metadata";
import * as express from "express";

const app = express();

//Middlewares
app.use(express.json());
//
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

