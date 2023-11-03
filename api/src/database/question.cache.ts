import * as redis from 'redis';
import { IQuestion } from '../interface/question.interface';

export class QuestionCache {
  public client;

  constructor() {
    this.client = redis.createClient({
      url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_DOCKER_PORT}`
    });

    this._setRedisConfig();
  }

  private async _setRedisConfig() {

    await this.client.connect();

    this.client.on('connect', () => {
      console.log('Connected to Redis');
    });
    this.client.on('error', (err) => {
      console.log('Redis error: ', err);
    });
  }

  public getAllQuestions(complexity: string, categories: string[]) {
    const allQuestions = this.client.get('questions');
  }

  public setAllQuestions(questions: IQuestion[]) {
    this.client.set('questions', JSON.stringify(questions));
  }

  public async getCategories() {
    const categories = await this.client.lRange('categories', 0, -1);

    if (categories.length === 0) {
      return null;
    }

    return categories;
  }

  public setCategories(categories: string[]) {
    categories.forEach((category) => {
      this.client.rPush('categories', category);
    });
  }

  public async getLanguages() {
    const data = await this.client.lRange('languages', 0, -1);

    if (data.length === 0) {
      return null;
    }

    return data.map((language) => {
      return JSON.parse(language);
    });
  }

  public setLanguages(languages: IQuestion[]) {
    languages.forEach((language) => {
      this.client.rPush('language', JSON.stringify(language));
    });
  }

  public clearCache() {
    this.client.flushAll();
  }

}


