interface ExamBaseI {
  name: string;
  code: string;
  numberOfQuestion: number;
  totalTime: number;
  correctAnswer: string;
  description: string;
  device: string;
  examGroupId: number;
  classId: number;
}

export interface ExamI extends ExamBaseI {
  id: number;
}

// create or update
export interface ExamReqI extends ExamBaseI {}

// response
export interface ExamResI extends ExamI {}
