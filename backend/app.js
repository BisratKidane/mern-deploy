const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

// middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header( "Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

/* connect MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});
*/
require("./routes/main.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App is Listening on PORT ${PORT}`);
})