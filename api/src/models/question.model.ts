/**
 * @file Defines the Database Schema for the question service.
 * @author Irving de Boer
 */
import {model, Schema} from 'mongoose';

import {IQuestion} from '../interface/question.interface';

const questionModel = new Schema({
  title: { type: String, required: [true, 'Field is required'] },
  description: { type: String, required: [true, 'Field is required'] },
  categories: { type: Array<string>, required: [true, 'Field is required'] },
  complexity: { type: String, required: [true, 'Field is required'] },
  deleted: {type: Boolean, default: false, required: [true, 'Field is required']},
  deletedAt: {type: Date, default: null},
});

export const question = model<IQuestion>('Question', questionModel);
