interface TopicBaseI {
    code: string;
    name: string;
    subjectId: number;
}

export interface TopicI extends TopicBaseI {
    id: number
}

// create or update
export interface TopicReqI extends TopicBaseI {}

// response
export interface TopicResI extends TopicI {}

