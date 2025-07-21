interface ExamResultBaseI {
  status: string;
  answers: any;
  numberOfCorrectAnswer: number;
  score: number;
  userId: number;
  examId: number;
}

export interface ExamResultI extends ExamResultBaseI {
  id: number;
}

// create or update
export interface ExamResultReqI extends ExamResultBaseI {}

// response
export interface ExamResultResI extends ExamResultI {}
