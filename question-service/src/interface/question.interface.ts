import { Document } from "mongoose";

export interface IQuestion extends Document {
  _id: string;
  title: string;
  description: string;
  categories: Array<string>;
  complexity: string;
}