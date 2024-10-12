const express = require('express')
const dotenv = require('dotenv')
const dbConnection = require('./config/DbConnection')
const userRoutes = require('./routes/userRoutes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const productRoutes = require('./routes/productRoutes')
const ordersRoutes = require('./routes/ordersRoutes')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:['http://localhost:5173'],
    credentials: true,
}))
dotenv.config()
dbConnection()

app.get('/', (req, res) =>{
    res.json({ Hello: "World"})
})

app.use('/api/auth', userRoutes)
app.use('/product', productRoutes)
app.use('/orders', ordersRoutes)


app.listen(process.env.PORT)