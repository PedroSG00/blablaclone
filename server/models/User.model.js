const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(

  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },

    username: {
      type: String,
      required: [true, 'Username is required.']
    },

    firstname: {
      type: String,
      required: [true, 'First Name is required.']
    },

    lastname: {
      type: String,
      required: [true, 'First Name is required.']
    },

    age: {
      type: Number,
      required: true,
      min: [18, "You can't be less than 18 to register."]
    },

    gender: {
      type: String,
      required: [true, 'You have to specify your gender'],
      enum: ['MALE', 'FEMALE', 'UNDEFINED']
    },

    role: {
      type: String,
      enum: ['USER', 'ADMIN', 'DRIVER'],
      default: 'USER'
    },

    password: {
      type: String,
      required: [true, 'Password is required.']

    },

    trips: [{
      type: Types.ObjectId,
      ref: 'Trip'
    }],

    comments: [{
      type: Types.ObjectId,
      ref: 'Comment'
    }],

    friends: [{
      type: Types.ObjectId,
      ref: 'User'
    }],

    car: [{
      type: Types.ObjectId,
      ref: 'Car'
    }]

  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;