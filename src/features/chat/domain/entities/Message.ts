export class Message {
    constructor(
      public readonly id: string,
      public readonly sender: 'user' | 'bot',
      public readonly content: string,
      public readonly timestamp: string
    ) {}
  }
  