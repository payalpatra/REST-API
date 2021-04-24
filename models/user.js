const mongoose = require("mongoose");

//Users schema
const usersSchema = new mongoose.Schema({
  //properties of schema--
  name: {
    type: String,
    required: true,
  },
  userInteraction: {
    type: String,
    required: false,
  },
  userInteractionDone: {
    type: Date,
    required: true,
    default: Date.now,
     //It's gonna get the default date if we don't pass any date
  },
});

module.exports = mongoose.model("User", usersSchema); // parametrs -- name of the model,schema
//When we export/import in different file this model allows to interact directly with the database using the schema
