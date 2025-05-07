

const express = require("express");
const dotenv = require("dotenv");
require("./config/db"); 

dotenv.config({ path: "./config/.env" });

const app = express();


app.use(express.json());

const userRoutes = require("./routes/UserRoutes");
const productRoutes = require("./routes/ProductRoutes");
const orderRoutes = require("./routes/OrderRoutes");
const messageRoutes = require("./routes/MessageRoutes");


app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/messages", messageRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});