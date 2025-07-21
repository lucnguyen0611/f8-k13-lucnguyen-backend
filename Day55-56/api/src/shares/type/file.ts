interface FileBaseI {
  url: string;
  key: string;
}

export interface FileI extends FileBaseI {
  id: number;
}

// create or update
export interface FileReqI extends FileBaseI {}

// response
export interface FileResI extends FileI {}
