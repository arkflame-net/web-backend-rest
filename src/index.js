import express from "express";
import AuthRoutes from "./routes/AuthRoutes";
import ProductRoutes from "./routes/ProductRoutes";
import ProfileRoutes from "./routes/ProfileRoutes";

const app = express();

app.use("auth", AuthRoutes);
app.use("product", ProductRoutes);
app.use("profile", ProfileRoutes);

app.listen(3000, "0.0.0.0", () => {
    console.log("Started express application on 0.0.0.0:3000");
});