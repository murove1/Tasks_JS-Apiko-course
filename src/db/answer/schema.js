const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: String,
  description: { type: String, required: true, maxlength: 200 },
  questionId: mongoose.SchemaTypes.ObjectId,
  createdAt: { type: Date, default: new Date() },
  createById: mongoose.SchemaTypes.ObjectId
});

module.exports = { schema };
