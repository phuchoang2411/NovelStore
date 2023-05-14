const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishers: {
    type: String,
    required: true,
  },
  translators: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  ratingAvg: {
    type: Number,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0,
  },
  totalViews: {
    type: Number,
    default: 0,
  },
  totalPurchase: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  ownerName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('book', bookSchema, 'books');
