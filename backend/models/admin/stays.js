
const mongoose=require('mongoose')
const Schema= mongoose.Schema

const HotelSchema=new Schema({
  placename: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    address: { type: String, required: true },
    pincode:{type:Number,required:true},
    city:{type:String,required:true},
    images: { type: [String], required: true }, 
    category: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports=mongoose.model('Stays',HotelSchema)