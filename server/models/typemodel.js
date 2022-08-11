const mongoose = require("mongoose");

const typeSchema = mongoose.Schema(
  {
    bikes: {type: String,required: true,trim: true},
    cars: {type: String,required: true,trim: true}
  },
  {timestamps: true}
);

const Vehtype = mongoose.model("Vehtype", typeSchema);

module.exports = Vehtype;

// this models are to post the type in backend