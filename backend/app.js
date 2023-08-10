const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

// middleware
const corsOptions = {
    origin: 'https://mern-deploy-fe.onrender.com' // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
mongoose.connect('mongodb+srv://bisrat:sd39BlDj0x4xxWfQ@cluster0.rgppm.mongodb.net/?retryWrites=true&w=majority').then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});