const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  isPositive: Boolean,
  createdAt: { type: Date, default: new Date() },
  answerId: mongoose.SchemaTypes.ObjectId,
  createById: mongoose.SchemaTypes.ObjectId
});

module.exports = { schema };
