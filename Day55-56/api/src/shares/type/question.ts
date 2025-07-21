interface QuestionBaseI {
  index: number;
  type: string;
  correctAnswer: string;
  examId: number;
  topicId: number;
}

export interface QuestionI extends QuestionBaseI {
  id: number;
}

// create or update
export interface QuestionReqI extends QuestionBaseI {}

// response
export interface QuestionResI extends QuestionI {}
