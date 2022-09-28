const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: { type: String, required:true }, 
    content: String,
    tags: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('notes',notesSchema);