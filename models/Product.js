const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    required: true,
    default: Date.now
  }
}, {
  collection: 'products'
})

module.exports = mongoose.model('Product', productSchema)