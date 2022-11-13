// use our mongoDb conection link
const key = require("./key/key")

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;
const HOST = '0.0.0.0';

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
app.listen(PORT, HOST);