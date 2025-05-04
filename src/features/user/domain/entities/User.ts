export class User {
    constructor(
      public readonly id: string,
      public firstName: string,
      public lastName: string,
      public email: string,
      public phone: string,
      public gender: 'male' | 'female' | '',
      public taxId: string,
      public country: string,
      public address: string,
      public avatarUrl: string,
      public role: 'user' | 'admin',
      public readonly createdAt: string
    ) {}
  
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`.trim()
    }
  }
  