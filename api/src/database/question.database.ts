/**
 * @file Manages the database queries.
 * @author Irving de Boer
 */
import {IFilter, IQuestion} from '../interface/question.interface';
import {question} from '../models/question.model';

export class QuestionService {
  /**
   * Retrieves all questions in the database.
   * @returns - A promise to queried document.
   */
  public findAll(limit: number, offset: number): Promise<IQuestion[]> {
    return question.find({deleted: false}, null, {
      limit: limit,
      skip: offset
    }).select('-description -deleted -deletedAt').exec();
  }

  /**
   * Retrieves a specific question from the database based on _id.
   * @param questionId - The id of the question to be retrieved.
   * @returns - A promise to the queried document.
   */
  public findOneById(questionId: string): Promise<IQuestion | null> {
    return question.findById(questionId).select('-deleted -deletedAt').exec();
  }

  /**
   * Retrieves all questions of a specific complexity type from the database.
   * @param filter - Filter parameters consisting of complexity and categories.
   * @returns - A promise to the queried document.
   */
  public findByParams(filter: IFilter): Promise<IQuestion[]> {
    if (filter.categories != null) {
      filter.categories.sort();
    }

    console.log({ ...filter });
    return question.find({...filter, deleted: false}).select('-deleted -deletedAt').exec();
  }

  /**
   * Updates a specific question from database based on _id.
   * @param questionId - The ID of the question being updated.
   * @param body - The JSON object representing the HTTP request body.
   * @returns - A promise to the updated queried document.
   */
  public findAndUpdate(
    questionId: string,
    body: IQuestion,
  ): Promise<IQuestion | null> {
    body.categories.sort();
    return question
      .findByIdAndUpdate(
        questionId,
        {
          title: body.title,
          description: body.description,
          categories: body.categories,
          complexity: body.complexity,
          deleted: false,
          deletedAt: null,
        },
        { new: true },
      ).select('-deleted -deletedAt')
      .exec();
  }

  /**
   * Adds a question to the database.
   * @param body - The JSON object representing the HTTP request body.
   * @returns - Inserted document.
   */
  public addQuestion(body: IQuestion): Promise<IQuestion | null> {
    body.categories.sort();
    return question.create({
      title: body.title,
      description: body.description,
      categories: body.categories,
      complexity: body.complexity,
      deleted: false,
      deletedAt: null,
    });
  }

  /**
   * Deletes a question from the database based on _id.
   * @param id - The id of the document being deleted.
   * @returns - A promise to the deleted queried document.
   */
  public findAndDelete(id: string): Promise<IQuestion | null> {
    return question.findByIdAndUpdate(id, {
      deleted: true,
      deletedAt: Date.now()
    }).select('-deleted -deletedAt').exec();
  }

  /**
   * Deletes a question from the database based on whether it is marked as deleted and more than an hour has passed from
   * deletedOn date
   * @returns - A promise to the deleted documents.
   */
  public removeFromDatabase(): Promise<any> {


    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);
    return question.deleteMany({deleted: true, deletedAt: {$lte: oneHourAgo}}).exec();
  }

  /**
   * Retrieves all categories from the database.
   * @returns - A promise to the queried document.
   */
  public async getCategories() : Promise<Array<string>> {
    const data : Array<string> = await question.distinct('categories').exec();

    //filter duplicates
    return data.sort();
  }
}
