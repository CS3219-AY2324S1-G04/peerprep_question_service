/**
 * @file Manages the database queries.
 * @author Irving de Boer
 */
import { IQuestion } from '../interface/question.interface';
import { question } from '../models/question.model';

export class QuestionService {
  /**
   * Retrieves all questions in the database.
   * @returns - A promise to queried document.
   */
  public findAll(): Promise<IQuestion[]> {
    return question.find({}).select(['-description']).exec();
  }

  /**
   * Retrieves a specific question from the database based on _id.
   * @param questionId - The id of the question to be retrieved.
   * @returns - A promise to the queried document.
   */
  public findOneById(questionId: string): Promise<IQuestion | null> {
    return question.findById(questionId).exec();
  }

  /**
   * Retrieves all questions of a specific complexity type from the database.
   * @param complexity - The string representation of the complexity queried.
   * @returns - A promise to the queried document.
   */
  public findByComplexity(complexity: string): Promise<IQuestion[] | null> {
    return question.find({ complexity: complexity }).exec();
  }

  /**
   * Updates a specific question from database based on _id.
   * @param body - The JSON object representing the HTTP request body.
   * @returns - A promise to the updated queried document.
   */
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

  /**
   * Adds a question to the database.
   * @param body - The JSON object representing the HTTP request body.
   * @returns - Inserted document.
   */
  public addQuestion(body: IQuestion): Promise<IQuestion | null> {
    return question.create({
      title: body.title,
      description: body.description,
      categories: body.categories,
      complexity: body.complexity,
    });
  }

  /**
   * Deletes a question from the database based on _id.
   * @param id - The id of the document being deleted.
   * @returns - A promise to the deleted queried document.
   */
  public findAndDelete(id: string): Promise<IQuestion | null> {
    return question.findByIdAndDelete(id).exec();
  }
}
