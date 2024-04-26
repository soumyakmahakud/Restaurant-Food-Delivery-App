const { default: mongoose } = require("mongoose");

const foodsModel = new mongoose.Schema({
    name:String,
    price:Number,
    img_path:String,
    description:String,
    resto_id:mongoose.Schema.Types.ObjectId
});

export const foodSchma = mongoose.model.foods || mongoose.model("foods", foodsModel)