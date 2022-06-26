const {Schema,model} = require("mongoose")

const userschema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true,
    },
 
    password:{
        type: String,
        required: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
    },
    
    car:[
        {
            type: Schema.Types.ObjectId,
            ref: "Car"
        }
    ] 

    

},
{
    toJSON:{
        virtuals:true
    },
    id: false
}
)

const User= model("User",userschema)
module.exports = User