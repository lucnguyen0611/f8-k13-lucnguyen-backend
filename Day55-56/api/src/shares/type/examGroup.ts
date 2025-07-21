interface ExamGroupBaseI {
  name: string;
  startTime: string;
  waitTime: number;
  isOnce: boolean;
  isSaveLocal: boolean;
  classId: number;
}

export interface ExamGroupI extends ExamGroupBaseI {
  id: number;
}

// create or update
export interface ExamGroupReqI extends ExamGroupBaseI {}

// response
export interface ExamGroupResI extends ExamGroupI {}
