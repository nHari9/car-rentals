const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: {type: String,required: true,trim: true},
    lastname: {type: String,required: true,trim: true},
    wheels: {type: String,required: true,trim: true},
    type: {type: String,required: true,trim: true},
    model: {type: String,required: true,trim: true},
    dates: {type: Number,required: true,trim: true},
  },
  {timestamps: true}
);

const VehUser = mongoose.model("VehUser", userSchema);

module.exports = VehUser;
