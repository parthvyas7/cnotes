const mongoose = require('mongoose');
const monogoURI = "mongodb://localhost:27017/";

const connectToMongo = () => {
    mongoose.connect(monogoURI,()=>{
        console.log("Connected to Mongoose sucessfully");
    })
}
module.exports = connectToMongo;