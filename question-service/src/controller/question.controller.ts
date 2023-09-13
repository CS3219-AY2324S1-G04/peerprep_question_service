import { Request, Response, Router } from "express";
import { QuestionService } from "../database/question.database";
import { IQuestion, IQuestionRequestBody } from "../interface/question.interface";

export class QuestionController {
  public router= Router();
  
  constructor(private questionService: QuestionService) {
    this.setRoutes();
  }

  public setRoutes() {

    // returns all questions
    this.router.route("/").get(this.findAll);

    // returns all questions of a specified difficulty 
    this.router.route("/complexity/:complexity").get(this.findByComplexity);
    
    // returns a specific question by id;
    this.router.route("/id/:id").get(this.findOneById);

    // adds a question to the question repository
    this.router.route("/").post(this.addQuestion);

    // updates a question to the question repository
    this.router.route("/").put(this.updateQuestion);

    // deletes a question to 
    this.router.route("/:id").delete(this.findAndDelete);

  }

  private findAll = async (req: Request, res: Response) => {
    try {
      const question = await this.questionService.findAll();
      res.send(question);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  };

  private findOneById = async (req: Request, res: Response) => {
    try {
      const id : string = req.params.id;
      const question = await this.questionService.findOneById(id);
      if (question === null) {
        res.status(404).send("Question does not exist");
      } else {
        res.send(question);
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  private findByComplexity = async (req: Request, res: Response) => {
    try {
      const complexity : string = req.params.complexity;
      const question = await this.questionService.findByComplexity(complexity);
      res.send(question);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  private addQuestion = async (req: Request, res: Response) => {
    try {
      const body : IQuestion = req.body;
      const question = await this.questionService.addQuestion(body);
      res.send(question);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  private updateQuestion = async (req: Request, res: Response) => {
    try {
      const body : IQuestionRequestBody = req.body;
      const question = await this.questionService.findAndUpdate(body);
      res.send(question);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }

  private findAndDelete = async (req: Request, res: Response) => {
    try {
      const questionId : string = req.params.id;
      const question = await this.questionService.findAndDelete(questionId);
      res.send(question);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  }
  
}