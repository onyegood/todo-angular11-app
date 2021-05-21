class ErrorResponse {
    constructor(
      public message: string,
      public timestamp: Date,
      public path: string,
      public trace: string,
      public error: string
    ) {}
  }
  export class Error {
    constructor(public error: ErrorResponse) {}
  }