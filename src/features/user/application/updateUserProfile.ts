import { User } from '../domain/entities/User'
import { UserRepository } from '../domain/repositories/UserRepository'

export class UpdateUserProfile {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(user: User): Promise<void> {
    await this.userRepo.update(user)
  }
}
