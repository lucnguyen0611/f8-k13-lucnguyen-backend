import {ClassReqI, SubjectReqI, UserReqI, ClassUserReqI, ExamGroupReqI, ExamReqI, QuestionReqI, AnswerReqI, ExamResultReqI, TopicReqI, FileReqI, JobReqI} from "@/shares";

export interface BaseServiceI <RequestI, ResponseI> {
  find: (params?: any) => Promise<ResponseI[]>
  findOne: (id: number) => Promise<ResponseI>
  create: (data: RequestI) => Promise<ResponseI>
  updateOne: (id: number, data: RequestI) => Promise<ResponseI>
  softDelete: (id: number) => void
}

export interface ClassServiceI extends BaseServiceI<ClassReqI, any> {}
export interface SubjectServiceI extends BaseServiceI<SubjectReqI, any> {}
export interface UserServiceI extends BaseServiceI<UserReqI, any> {}
export interface ClassUserServiceI extends BaseServiceI<ClassUserReqI, any> {}
export interface ExamGroupServiceI extends BaseServiceI<ExamGroupReqI, any> {}
export interface ExamServiceI extends BaseServiceI<ExamReqI, any> {}
export interface QuestionServiceI extends BaseServiceI<QuestionReqI, any> {}
export interface AnswerServiceI extends BaseServiceI<AnswerReqI, any> {}
export interface ExamResultServiceI extends BaseServiceI<ExamResultReqI, any> {}
export interface TopicServiceI extends BaseServiceI<TopicReqI, any> {}
export interface FileServiceI extends BaseServiceI<FileReqI, any> {}
export interface JobServiceI extends BaseServiceI<JobReqI, any> {}

