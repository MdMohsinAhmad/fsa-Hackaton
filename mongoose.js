// const express =require('express')
const mongoose =require('mongoose')
 mongoose.connect('mongodb://localhost:27017/admin')
.then(()=>{console.log("Database connected Successfully")})
.catch((err)=>(console.log(err)))


const productSchema = new mongoose.Schema({
  brand:  { type:String },
  price:  { type:Number },
  inStock:{ type:Boolean},
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('mydata', productSchema);

