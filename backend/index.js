const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB Successfull'))
.catch(err => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);


app.listen(8800,() => {
    console.log('Backend server is running!')
})





