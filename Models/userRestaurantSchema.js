const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
 id: {
  type: Number,
  unique: true
 },
 categoryName: {
  type: String,
 },
 itemName: {
  type: String
 },
 url: {
  type: String
 },
 price: {
  type: Number
 },
 amount: {
  type: Number
 }

})

const Restaurantdata = mongoose.model('balaji_food', RestaurantSchema)
module.exports = Restaurantdata