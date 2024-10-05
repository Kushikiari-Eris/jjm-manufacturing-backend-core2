const express = require('express')
const productController = require('../controller/productController')
const router = express.Router()

router.post('/create', productController.addProduct)
router.get('/showAllProduct', productController.showAllProduct)
router.get('/showOnlyOneProduct/:id', productController.showSpecificProduct)
router.put('/updateProduct/:id', productController.updateProduct)
router.delete('/deleteProduct/:id', productController.deleteProduct)

module.exports = router