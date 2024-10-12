const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userId: { 
        type: String, 
        required: true 
    },
    customerName: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    contactNumber: { 
        type: String, 
        required: true 
    },
    paymentMethod: { 
        type: String, 
        required: true 
    },
    items: [
        {
            productName: { type: String, required: true },
            price: { type: Number, required: true }
        }
    ],
    totalAmount: { 
        type: Number, 
        required: true 
    },
    orderDate: { 
        type: Date, 
        default: Date.now 
    },
    status: { 
        type: String, 
        default: 'Pending' 
    }
});

module.exports = mongoose.model('Order', orderSchema);