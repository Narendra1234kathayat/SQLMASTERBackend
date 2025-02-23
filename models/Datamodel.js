import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Store name as String
  answers: { type: Object, required: true }, // Store answers as Object
  score: { type: Number, required: true }  // Store score as Number
});

const DataModel = mongoose.model("Data", DataSchema);

export default DataModel;
