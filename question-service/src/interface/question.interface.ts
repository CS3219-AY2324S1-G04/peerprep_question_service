import { Document } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  description: string;
  categories: Array<string>;
  complexity: string;
}

export interface IQuestionRequestBody {
  _id: string;
  title: string;
  description: string;
  categories: Array<string>;
  complexity: string;
}