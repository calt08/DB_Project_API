import "reflect-metadata";
import * as express from "express";
import * as cors from "cors";

require('dotenv').config()
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Import Routes
import userRoute from "./Routes/User.route";
import categoriesRoute from "./Routes/Categories.route";
import itemsRoute from "./Routes/Items.route";
import sellRoute from "./Routes/Sell.route";
import setupRoute from "./utils/Setup.route";

// Routes Middlewares
app.use("/customers", userRoute);
app.use("/categories", categoriesRoute);
app.use("/items", itemsRoute);
app.use("/sell", sellRoute);

app.use('/setup', setupRoute);

// Start Server
app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port ${process.env.PORT || 3000}`));

