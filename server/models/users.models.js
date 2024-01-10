const { mongoose } = require("mongoose");
const Schema = mongoose.Schema

const usersSchema = new Schema({
    username:{
        type: String,
        required: true,
        minlength: 3
    },
    age:{
        type: Number,
        unique:false  
        
    },
    gender:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    }
    
},{
    timestamp: true,
});

const Users = mongoose.model('User',usersSchema);


module.exports = Users;