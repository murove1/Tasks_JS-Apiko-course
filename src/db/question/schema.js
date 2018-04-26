const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String, required: true, minlength: 8 },
  description: { type: String, required: true, minlength: 8, maxlength: 200 },
  tags: [String],
  createdAt: { type: Date, default: new Date() },
  createById: mongoose.SchemaTypes.ObjectId
});

module.exports = {
  schema
};
