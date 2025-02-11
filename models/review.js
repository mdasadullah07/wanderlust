const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  author: { type: String, default: "Anonymous" }, // ✅ Store reviewer's name
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;

