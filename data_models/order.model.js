const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orderNo: { type: String, required: true },
    customerId: { type: mongoose.Types.ObjectId, ref: "Customers" },
    deliveryType: {
        type: String,
        required: true,
    },
    weightLimit: {
        type: String,
        required: true,
    },
    orderImg:{
        type:String,
    },
    TransactionId:{
        type:String,
    },
    pickupPoint: {
        name: {
            type: String,
            required: true,
        },
        mobileNo: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        lat: {
            type: String,
            required: true,
        },
        long: {
            type: String,
            required: true,
        },
        completeAddress: {
            type: String,
            required: true,
        },
        contents: {
            type: String,
            required: true,
        },
        arriveType: {
            type: String,
        },
        arriveTime: {
            type: String,
        },
    },
    deliveryPoint: {
        name: {
            type: String,
            required: true,
        },
        mobileNo: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        lat: {
            type: String,
            required: true,
        },
        long: {
            type: String,
            required: true,
        },
        completeAddress: {
            type: String,
            required: true,
        },
        distance: {
            type: Number,
            required: true,
        },
    },
    collectCash: {
        type: String,
        required: true,
    },
    promoCode: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    discountPercentage :{
        type : Number,
    },
    additionalAmount: {
        type: Number,
        required: true,
    },
    finalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    dateTime: {
        type: Date,
        default: Date.now,
    },
    courierId: [
        { type: mongoose.Types.ObjectId, ref: "Couriers", default: null },
    ],
    schedualDateTime: {
        type: Date
    },
    orderType: {
        type: String
    },
    extraTime: {
        type: mongoose.Types.ObjectId, 
        ref: "ExtraTime",
    }
});

module.exports = mongoose.model("Orders", orderSchema);