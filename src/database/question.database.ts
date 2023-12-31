/**
 * @file Manages the database queries.
 * @author Irving de Boer
 */
import {
  IFilter,
  IPagination,
  IQuestion,
} from '../interface/question.interface';
import { question } from '../models/question.model';
import { QuestionCache } from './question.cache';

export class QuestionService {
  private _questionCache: QuestionCache;

  public constructor() {
    this._questionCache = new QuestionCache();
  }

  /**
   * @returns True if there are no questions in the database. Otherwise, returns
   * false.
   */
  public async isEmpty(): Promise<boolean> {
    return (await question.findOne().exec()) == null;
  }

  /**
   * Retrieves all questions in the database.
   * @param page - Pagination parameters consisting of limit and offset.
   * @param filter - Filter parameters consisting of complexity, categories and
   * language.
   * @param filter.categories - Array of categories.
   * @param filter.complexity - Complexity type.
   * @param filter.language - Array of languages.
   * @returns - A promise to queried document.
   */
  public findAll(
    page: IPagination,
    filter: {
      categories: Array<string>;
      complexity: string;
      language: Array<string>;
    },
  ): Promise<IQuestion[]> {
    if (!filter.categories && !filter.complexity && !filter.language) {
      return question
        .find({ deleted: false }, null, { ...page })
        .select('-description -deleted -deletedAt -template._id -template.code')
        .exec();
    }

    if (!filter.categories) {
      if (!filter.language) {
        return question
          .find(
            {
              deleted: false,
              complexity: filter.complexity,
            },
            null,
            { ...page },
          )
          .select(
            '-description -deleted -deletedAt -template._id -template.code',
          )
          .exec();
      }

      return question
        .find(
          {
            deleted: false,
            complexity: filter.complexity,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'template.langSlug': { $all: filter.language },
          },
          null,
          { ...page },
        )
        .select('-description -deleted -deletedAt -template._id -template.code')
        .exec();
    }

    if (!filter.language) {
      return question
        .find(
          {
            deleted: false,
            complexity: filter.complexity,
            categories: { $all: filter.categories },
          },
          null,
          { ...page },
        )
        .select('-description -deleted -deletedAt -template._id -template.code')
        .exec();
    }

    return question
      .find(
        {
          deleted: false,
          complexity: filter.complexity,
          categories: { $all: filter.categories },
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'template.langSlug': { $all: filter.language },
        },
        null,
        { ...page },
      )
      .select('-description -deleted -deletedAt -template._id -template.code')
      .exec();
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
  public async findByParams(filter: IFilter): Promise<IQuestion[]> {
    if (filter.categories != undefined && Array.isArray(filter.categories)) {
      filter.categories.sort();
    }

    let result: IQuestion[];

    if (filter.categories == undefined) {
      result = await question
        .find({
          complexity: filter.complexity,
          deleted: false,
        })
        .select(
          `-deleted -deletedAt -description
     -categories -complexity`,
        )
        .exec();
    } else {
      result = await question
        .find({
          complexity: filter.complexity,
          categories: { $in: filter.categories },
          deleted: false,
        })
        .select(
          `-deleted -deletedAt -description
     -categories -complexity`,
        )
        .exec();
    }

    if (result == undefined || result.length == 0) {
      return result;
    }

    return result.filter((item) => {
      return item.template.some((t) => filter.language.includes(t.langSlug));
    });
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

    this._questionCache.clearCache();

    return question
      .findByIdAndUpdate(
        questionId,
        {
          title: body.title,
          description: body.description,
          categories: body.categories,
          complexity: body.complexity,
          template: body.template,
          deleted: false,
          deletedAt: null,
        },
        { new: true },
      )
      .select('-deleted -deletedAt')
      .exec();
  }

  /**
   * Adds a question to the database.
   * @param body - The JSON object representing the HTTP request body.
   * @returns - Inserted document.
   */
  public async addQuestion(body: IQuestion): Promise<IQuestion | null> {
    body.categories.sort();
    this._questionCache.clearCache();

    if (await question.findOne({ title: body.title }).exec()) {
      throw new Error('Question already exists');
    }

    return question.create({
      title: body.title,
      description: body.description,
      categories: body.categories,
      complexity: body.complexity,
      template: body.template,
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
    this._questionCache.clearCache();

    return question
      .findByIdAndUpdate(id, {
        deleted: true,
        deletedAt: Date.now(),
      })
      .select('-deleted -deletedAt')
      .exec();
  }

  /**
   * Deletes questions from the database based on delete status.
   * @returns - A promise to the deleted documents.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public removeFromDatabase(): Promise<any> {
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    return question
      .deleteMany({ deleted: true, deletedAt: { $lte: oneDayAgo } })
      .exec();
  }

  /**
   * Retrieves all categories from the database.
   * @returns - A promise to the queried document.
   */
  public async getCategories(): Promise<Array<string>> {
    const categoriesCache = await this._questionCache.getCategories();
    if (categoriesCache) {
      return categoriesCache;
    }

    const data: Array<string> = await question.distinct('categories').exec();

    const sortedData = data.sort();
    this._questionCache.setCategories(sortedData);

    return data.sort();
  }

  /**
   * Retrieves all languages and respective langSlugs from the database.
   * @returns - A promise to an array of objects containing language and
   * langSlug.
   */
  public async getAllLanguages(): Promise<Array<IQuestion>> {
    const cacheRequest = await this._questionCache.getLanguages();

    if (cacheRequest != null) {
      return cacheRequest;
    }

    const data: Array<IQuestion> = await question
      .distinct('template', { deleted: false })
      .exec();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.forEach((question: any) => {
      delete question._id;
      delete question.code;
    });

    const languageData = data.filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any, index, self: any[]) =>
        index ===
        self.findIndex(
          (t) => t.language === item.language && t.langSlug === item.langSlug,
        ),
    );

    // update redis cache
    this._questionCache.setLanguages(languageData);

    return languageData;
  }
}
