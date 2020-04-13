// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var OrderModel = require('../model/Order.js');
//var menuModel = require('../model/Restaurant.js');
var Kitchen = require('../model/Kitchen.js');

var DriverSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {type: String, lowercase: true, required: true, unique: true, lowercase: true},
    username: {type: String, lowercase: true, required: true, unique: true},
    password: {type: String, required: true},
    address : String,
    phoneNo : String,
    vehicleType : String,
    vehicleName : String,
    vehicleNo: String,
    driverStatus : {type: String, default: 'Available',enum:['Available', 'onDuty']},
    status: {type: Boolean, default: true},
    created_at: Date,
    updated_at: Date,
    dtype: {type: String, default: 'driver'},
    lat : String,
    zip:String,
    lng : String,
    orderIds : [], 
    image : String,
    city:String,
    voidcheque: String,
    AccountName: String,
    AccountNumber: String,
    BankName: String,
    paymentmethod:String,
    policecertificate:String,
    carinsurance:String,
    carnumberplate:String,
   // ByCheque:{type:Boolean,default:false},
    license: String,
    country:String,   
    isactivated: {type: Number, default: 0},
    fcmToken:[],
    kitchensallow: [{ resId: { type: Schema.Types.ObjectId, ref: 'Kitchen' }, status: {type: Boolean, default: false}}]
    });

var Driver = mongoose.model('Driver', DriverSchema);

// export accessibility
module.exports = Driver;