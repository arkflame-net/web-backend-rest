import express from "express";

const app = express();

app.listen(3000, "0.0.0.0", () => {
    console.log("Started express application on 0.0.0.0:3000");
});