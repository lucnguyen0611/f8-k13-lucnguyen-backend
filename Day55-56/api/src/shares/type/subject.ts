interface SubjectBaseI {
    name: string
    code?: string
}

export interface SubjectI extends SubjectBaseI {
    id: number
}

// create or update
export interface SubjectReqI extends SubjectBaseI {}

// response
export interface SubjectResI extends SubjectI {}

