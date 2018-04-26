const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfileSchema = {
  fullName: String,
  post: String
};

const UserServicesSchema = {
  password: {
    bcrypt: String
  },
  google: {
    fullName: String,
    accessToken: String,
    refreshToken: String
  }
};

const schema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  profile: UserProfileSchema,
  services: UserServicesSchema
});

module.exports = { schema };
