const mongoose = require("mongoose");
mongoose
. connect ("mongodb+srv://michhountondji:fin2025@cluster0.meplihl.mongodb.net/")

    .then(() => console.log("connected to MongoDB"))
    .catch((err) => console.log("failed to connect to MongoDB", err));