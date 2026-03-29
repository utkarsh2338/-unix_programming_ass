const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ItemSchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model("Item", ItemSchema);

// Routes
app.get("/items", async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

app.post("/items", async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.json(item);
});

app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`));