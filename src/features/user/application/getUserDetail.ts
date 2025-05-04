import { UserRepository } from '../domain/repositories/UserRepository'
import { User } from '../domain/entities/User'

export class GetUserDetail {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(userId: string): Promise<User> {
    return this.userRepo.getById(userId)
  }
}
