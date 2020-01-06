const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema({
  picture: String,
  name: String,
  email: String,
  city: String,
  location: {
    type: Object,
    enum: 'Point',
    coordinates: [Number],
  },
});

ShopSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Shop', ShopSchema);
