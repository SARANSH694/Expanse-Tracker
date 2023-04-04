import mongoose from "mongoose";

const Transaction = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    datetime : {
        type: Date,
        required: true
    }
})

const TransactionModel = mongoose.model('Transaction' , Transaction)

export default TransactionModel;
