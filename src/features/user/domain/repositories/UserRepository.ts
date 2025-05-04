import { User } from '../entities/User'

export interface UserRepository {
  getById(userId: string): Promise<User>
  update(user: User): Promise<void>
}
