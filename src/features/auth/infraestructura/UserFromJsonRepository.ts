
import usersJson from '@/data/users.json'
import { User } from '../domain/entities/User'
import { UserRepository } from '../domain/repositories/UserRepository'

export class UserJsonRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = usersJson.find(u => u.email === email)
    return user ? new User(user.id, user.name, user.email, user.password) : null
  }
}
