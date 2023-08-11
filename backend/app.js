const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

// middleware
const corsOptions = {
    origin: '*' // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));

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

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`App is Listening on PORT ${PORT}`);
})