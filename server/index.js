const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();
const connect = require("./configs/db");

const PORT = 3456;

const userController = require("./controllers/usercontroller");

app.use("/", userController);

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Connected to db at ${PORT}`);
    } catch (e) {
        console.log("error", e);
    }
});