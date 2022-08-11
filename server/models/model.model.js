const mongoose = require("mongoose");

const modelSchema = mongoose.Schema(
    {
        bikeModels: {type: String,required: true,trim: true},
        carModels: {type: String,required: true,trim: true}
      },
      {timestamps: true}
    );

const Vehmodel = mongoose.model("Vehmodel", modelSchema);

module.exports = Vehmodel;


// this models are to post the models in backend