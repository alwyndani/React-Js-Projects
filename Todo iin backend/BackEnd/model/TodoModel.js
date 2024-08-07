import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  descr: {
    type: String,
    required: true,
  },
  // date: {
  //   type: Date,
  //   required: true,
  // },
  // time: {
  //   type: Date,
  //   required: true,
  // },
  // status: {
  //   type: Boolean,
  //   required: true,
  //   default: false,
  // },
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
