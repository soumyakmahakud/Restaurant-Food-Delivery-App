const { default: mongoose} = require('mongoose');

const restaurantModel = new mongoose.Schema({
    email:String,
    name:String,
    password:String,
    city:String,
    address:String,
    contact:String,
});

export const restaurantSchema = mongoose.models.restaurant || mongoose.model('restaurant', restaurantModel);