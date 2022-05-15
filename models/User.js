const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    minLength: 1
  },
  lastName: {
    type: String,
    required: true,
    minLength: 1
},
  avatar: {
    type: String,
    required: true
},
  location: {
    type: String,
    required: true
},
  bio: {
    type: String,
    required: true
},
  website: {
    type: String,
    required: false
},
  portfolioUrl: {
    type: String,
    required: false
},
  portfolioPassword: {
    type: String,
    required: false
},
  background: {
    type: String,
    required: false
},
  favorites: {
    type: Array,
    required: false
},
  artCollection: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Art' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the user doc
  if (!this.isModified('password')) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model('User', userSchema);