const express = require("express");
const ProductModel = require("./mongoose");
const app = express();
app.use(express.json());

// Add getDataList on e-commerce website
app.post("/", async (req, res) => {
  const { brand, inStock, price } = req.body;
  try {
    const inputData = await new ProductModel({ brand, inStock, price });
    await inputData.save();
    res.status(200).json(inputData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "failed to add getDataList check your connection" });
  }
});

// Get the product list
app.get("/list", async (_, res) => {
  try {
    const getDataList = await ProductModel.find();
    res.status(201).json(getDataList);
  } catch (error) {
    res.status(500).json({error:"Failed to load data list"});
  }
});

// update 
app.put("/list/:id", async (req, res) => {

  try {
    const id = req.params.id
    const data = req.body
    const getDataList = await ProductModel.findOneAndUpdate({_id:id},{$set:data});
    res.status(201).json(getDataList);
  } catch (error) {
    res.status(500).json({error:"Failed to load data list"});
  }
});



app.listen(3000, () => {
  console.log("server is running on port 3000");
});
