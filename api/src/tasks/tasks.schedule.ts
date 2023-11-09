/**
 * @file Scheduler that runs every day at midnight to delete questions from the
 * database.
 * @author Irving de Boer
 */
import * as cron from 'cron';

import { QuestionService } from '../database/question.database';

export class Scheduler {
  private _questionService;

  public constructor() {
    this._questionService = new QuestionService();
  }

  /**
   * Starts the scheduler to run delete questions from the database every day
   * at midnight. Questions are deleted if an
   * hour has passed since they were set to be deleted.
   */
  public start() {
    const job = new cron.CronJob(
      '0 0 * * *',
      async () => {
        console.log(
          'Running scheduled job to remove questions from the database',
        );
        try {
          await this._questionService.removeFromDatabase();
        } catch (error) {
          console.error('Error during the scheduled job:', error);
        }
      },
      null,
    );

    job.start();
  }
}
