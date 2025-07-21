interface AnswerBaseI {
    answer: string;
    isCorrect: boolean;
    examResultId: number;
    questionId: number;
}

export interface AnswerI extends AnswerBaseI {
    id: number
}

// create or update
export interface AnswerReqI extends AnswerBaseI {}

// response
export interface AnswerResI extends AnswerI {}

