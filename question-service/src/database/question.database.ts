import { IQuestion } from "../interface/question.interface";
import { Question } from "../models/question.model";

export class QuestionService {

    public findAll(): Promise<IQuestion[]> {
        return Question.find({}).select(['-description']).exec();
    }

    public findOneById(questionId: string) : Promise<IQuestion | null> {
        return Question.findById(questionId).exec();
    }

    public findByComplexity(complexity: string) : Promise<IQuestion[] | null> {
        return Question.find({ complexity: complexity }).exec();
    }

    public findAndUpdate(body : IQuestion) : Promise<IQuestion | null> {
        console.log(body);
        const id = body._id;
        return Question.findByIdAndUpdate(id, 
            {
                title: body.title,
                description : body.description,
                categories : body.categories,
                complexity : body.complexity
            },
            {new: true}).exec();
    }
    
    public addQuestion(body : IQuestion) : Promise<IQuestion | null> {
        return Question.create({
            title: body.title,
            description : body.description,
            categories : body.categories,
            complexity : body.complexity
        });
    }

    public findAndDelete(id: string) : Promise<IQuestion | null> {
        return Question.findByIdAndDelete(id).exec();
    }

}