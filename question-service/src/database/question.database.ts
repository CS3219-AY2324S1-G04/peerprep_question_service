import { IQuestion } from '../interface/question.interface';
import { question } from '../models/question.model';

export class QuestionService {
  public findAll(): Promise<IQuestion[]> {
    return question.find({}).select(['-description']).exec();
  }

  public findOneById(questionId: string): Promise<IQuestion | null> {
    return question.findById(questionId).exec();
  }

  public findByComplexity(complexity: string): Promise<IQuestion[] | null> {
    return question.find({ complexity: complexity }).exec();
  }

  public findAndUpdate(body: IQuestion): Promise<IQuestion | null> {
    console.log(body);
    const id = body._id;
    return question
      .findByIdAndUpdate(
        id,
        {
          title: body.title,
          description: body.description,
          categories: body.categories,
          complexity: body.complexity,
        },
        { new: true },
      )
      .exec();
  }

  public addQuestion(body: IQuestion): Promise<IQuestion | null> {
    return question.create({
      title: body.title,
      description: body.description,
      categories: body.categories,
      complexity: body.complexity,
    });
  }

  public findAndDelete(id: string): Promise<IQuestion | null> {
    return question.findByIdAndDelete(id).exec();
  }
}
