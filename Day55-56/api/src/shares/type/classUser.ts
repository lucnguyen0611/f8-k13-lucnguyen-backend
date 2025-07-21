interface ClassUserBaseI {
    classId: number
    userId: number
}

export interface ClassUserI extends ClassUserBaseI {
    id: number
}

// create or update
export interface ClassUserReqI extends ClassUserBaseI {}

// response
export interface ClassUserResI extends ClassUserI {}

