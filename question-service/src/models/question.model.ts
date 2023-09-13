import { IQuestion } from "../interface/question.interface";
import { model, Schema } from "mongoose";

const QuestionSchema = new Schema({
  title: { type: String, required: [true, "Field is required"] },
  description: { type: String, required: [true, "Field is required"] },
  categories: { type: Array<String>, required: [true, "Field is required"] },
  complexity: { type: String, required: [true, "Field is required"] },
});

export const Question = model<IQuestion>("Question", QuestionSchema);

