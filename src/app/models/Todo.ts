export class Todo {
    constructor(
      public id: string,
      public description: string,
      public isDone: boolean,
      public targetDate: Date
    ){}
  }

  export class TodoInputs {
    constructor(
      public description: string,
      public isDone: boolean,
      public targetDate: Date
    ){}
  }