/**
*Marton Bagoly
*/

const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  productName: {
    type: String,
    required: true,
    unique: true,
    max:100,
    default: 'product'
  },
  description: {
    type: String,
    required: false,
    default: 'description'
  },
  unitPrice: {
    type: Number,
    required: true,
    default: 9.99,
    min: 0,
    max: 100000
  },  
  productType:{
type: String,
required: true,
max : 50
  },
})
module.exports = mongoose.model('Product', ProductSchema)
