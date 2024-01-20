const express=require('express');
const cors=require('cors');
//require('dotenv').config();

const Transaction= require('./models/Transaction');
const mongoose=require("mongoose");
const app=express();

app.use(cors());
app.use(express.json());

app.get('/api/test',(req,res)=>{
    res.json('test ok3');
});

app.post('/api/transaction',async (req,res)=>{
    //console.log(process.env.MONGO_URL);
    await mongoose.connect("mongodb+srv://ag8244932:4EGrZY91RHvxmHIi@cluster0.bymno6h.mongodb.net/?retryWrites=true&w=majority");
    const {name,description,datetime,price}=req.body;
    const transaction=await Transaction.create({name,description,datetime,price});

    res.json(transaction);
});


app.get('/api/transactions', async (req,res)=>{
    await mongoose.connect("mongodb+srv://ag8244932:4EGrZY91RHvxmHIi@cluster0.bymno6h.mongodb.net/?retryWrites=true&w=majority");
    const transactions= await Transaction.find();
    res.json(transactions);
});


app.listen(4000);