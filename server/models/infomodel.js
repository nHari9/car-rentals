const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {type: String,required: true,trim: true},
    last_name: {type: String,required: true,trim: true},
  },
  {timestamps: true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
