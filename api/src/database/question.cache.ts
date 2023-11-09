/**
 * @file Manages the cache queries for the question service API.
 */
import * as redis from 'redis';

import { IQuestion } from '../interface/question.interface';

export class QuestionCache {
  public client;

  public constructor() {
    this.client = redis.createClient({
      url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_DOCKER_PORT}`,
    });

    this._setRedisConfig();
  }

  /**
   * Retrieves distinct categories from the cache.
   * @returns - An array of categories.
   */
  public async getCategories() {
    const categories = await this.client.lRange('categories', 0, -1);

    if (categories.length === 0) {
      return null;
    }

    return categories;
  }

  /**
   * Sets distinct categories in the cache.
   * @param categories - An array of categories.
   */
  public setCategories(categories: string[]) {
    categories.forEach((category) => {
      this.client.rPush('categories', category);
    });
  }

  /**
   * Retrieves all languages from the cache.
   * @returns - An array of objects containing language and langSlug.
   */
  public async getLanguages() {
    const data = await this.client.lRange('languages', 0, -1);

    if (data.length === 0) {
      return null;
    }

    return data.map((language) => {
      return JSON.parse(language);
    });
  }

  /**
   * Sets all languages in the cache.
   * @param languages - An array of objects containing language and langSlug.
   */
  public setLanguages(languages: IQuestion[]) {
    languages.forEach((language) => {
      this.client.rPush('language', JSON.stringify(language));
    });
  }

  /**
   * Clears the cache.
   */
  public clearCache() {
    this.client.flushAll();
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
}
