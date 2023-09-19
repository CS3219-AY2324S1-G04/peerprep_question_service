import { Document } from 'mongoose';

export interface IQuestion extends Document {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _id: string;
  title: string;
  description: string;
  categories: Array<string>;
  complexity: string;
}
