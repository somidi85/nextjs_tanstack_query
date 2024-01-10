import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    title: String,
    description: String,
    status: {
      type: String,
      enum: ["active", "completed"],
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
export default Todo;
