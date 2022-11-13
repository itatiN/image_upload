// use our mongoDb conection link
const key = require("./key/key")

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    key,
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("./routes"));
app.listen(3000);