const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    gender:{
        type:String,
        required:true
    },
    
    income:{
        type:Number,
        required:true
    },
    
    category:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
    }
    
},{timestamps:true})

module.exports = mongoose.model('user',userSchema)