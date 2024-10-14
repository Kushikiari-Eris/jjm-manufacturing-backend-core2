const express = require('express')
const dotenv = require('dotenv')
const dbConnection = require('./config/DbConnection')
const userRoutes = require('./routes/userRoutes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const productRoutes = require('./routes/productRoutes')
const ordersRoutes = require('./routes/ordersRoutes')
const path = require('path');


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

// Serve static files from 'uploads' folder at '/uploads' route
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Use routes for APIs
app.use('/api', userRoutes)
app.use('/api', productRoutes)
app.use('/api', ordersRoutes)


app.listen(process.env.PORT)