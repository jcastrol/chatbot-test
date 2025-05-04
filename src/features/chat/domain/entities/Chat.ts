import { Message } from './Message'

export class Chat {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly messages: Message[]
  ) {}

  addMessage(message: Message) {
    this.messages.push(message)
  }
}
