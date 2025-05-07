export type Message = {
  id: string
  sender: 'user' | 'bot'
  content: string
  timestamp: string
}