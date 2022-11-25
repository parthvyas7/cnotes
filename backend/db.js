const mongoose = require('mongoose');
const monogoURI = "mongodb://127.0.0.1:27017/";

const connectToMongo = () => {
    mongoose.connect(monogoURI, () => {
        console.log("Connected to Mongoose sucessfully");
    })
}
module.exports = connectToMongo;