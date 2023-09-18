import { Schema, model } from 'mongoose';

import { IQuestion } from '../interface/question.interface';

const questionSchema = new Schema({
  title: { type: String, required: [true, 'Field is required'] },
  description: { type: String, required: [true, 'Field is required'] },
  categories: { type: Array<string>, required: [true, 'Field is required'] },
  complexity: { type: String, required: [true, 'Field is required'] },
});

export const question = model<IQuestion>('Question', questionSchema);
