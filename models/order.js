const mongoose = require("mongoose");
const shortid = require("shortid");
const bcrypt = require("bcrypt");


const schema = mongoose.Schema;
const ObjectId = schema.ObjectId;

const orderSchema = new schema({
 _id: {
        type: String,
     default: shortid.generate
    },
    name: { type: String, required: true },
    state:{ type: String, required: false, enum : ['pending','completed'],default: 'pending'
    },
    custmerer_id:{type:mongoose.Schema.Types.String,
        ref:"customers"
        }
    

})



const taskModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;