/**
 * @file Delete questions from the database that are scheduled to be deleted.
 * This script should run at fixed intervals.
 * @author Irving de Boer
 */
import { QuestionService } from '../database/question.database';

async function run(): Promise<void> {
  const questionService = new QuestionService();

  console.log('Running scheduled job to remove questions from the database');

  try {
    await questionService.removeFromDatabase();
  } catch (error) {
    console.error('Error during the scheduled job:', error);
  }
}

run();
