const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['soap', 'detergent'],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: { 
        type: String 
    },
})

const Product = mongoose.model('product', productSchema)
module.exports = Product