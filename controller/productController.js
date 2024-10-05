const Product = require('../models/productModel');
const { ObjectId } = require('mongodb');

const addProduct = async (req, res) => {
    try {
        const { productName, description, category, price } = req.body;

        // Input validation
        if (!productName || !description || !category || price == null) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const product = await Product.create({ productName, description, category, price });
        res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Server error" });
    }
}

const showAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (error) {
        console.error("Error retrieving products:", error);
        res.status(500).json({ message: "Server error" });
    }
}

const showSpecificProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ product });
    } catch (error) {
        console.error("Error retrieving product:", error);
        res.status(500).json({ message: "Server error" });
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { productName, description, category, price } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(productId, {
            productName, description, category, price
        }, { new: true }); // Return the updated document

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Server error" });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    addProduct,
    showAllProduct,
    showSpecificProduct,
    updateProduct,
    deleteProduct
}
