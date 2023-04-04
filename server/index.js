import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

import Transaction from './models/Transaction.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/server/test' , (req,res) => {
    res.json('test ok3')
})

app.post('/server/transaction' , async (req,res) => {
    const {name,description,datetime,price} = req.body

    await mongoose.connect(process.env.MONGO_URL)
    const transaction =  await Transaction.create({name,description,datetime,price})

    res.json(transaction)
})

app.get('/server/transactions' , async (req,res) => {
    await mongoose.connect(process.env.MONGO_URL)
    const transactions = await Transaction.find()
    res.json(transactions)
})

app.listen(4000 , () => {
    console.log('server running')
})