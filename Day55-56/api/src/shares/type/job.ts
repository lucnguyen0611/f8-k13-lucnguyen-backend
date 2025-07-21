interface JobBaseI {
    name: string;
}

export interface JobI extends JobBaseI {
    id: number
}

// create or update
export interface JobReqI extends JobBaseI {}

// response
export interface JobResI extends JobI {}

