import mongoose from "mongoose";

const alwynSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  course : {
    type : String,
  }
});

const Alwyn = mongoose.model("Alwyn", alwynSchema);
export default Alwyn;