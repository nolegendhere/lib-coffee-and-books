/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  local : {
    type: String,
    enum : ['cafe','book_store'],
    default: 'cafe'
  },
  location: { type: { type: String }, coordinates: [Number] }
});

placeSchema.index({ location: '2dsphere' });

var Place = mongoose.model('Place', placeSchema);

module.exports = Place;
