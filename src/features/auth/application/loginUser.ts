import { UserRepository } from '../domain/repositories/UserRepository'

export class LoginUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email)
    if (!user || !user.isPasswordValid(password)) {
      throw new Error('Invalid credentials')
    }
    return user
  }
}
