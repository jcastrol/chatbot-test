import { UserRepository } from '../domain/repositories/UserRepository'
import { User } from '../domain/entities/User'

// Simulación de base de datos en memoria
let mockUserDB: Record<string, User> = {
  '1': new User(
    '1',
    'Maria',
    'García',
    'maria@example.com',
    '+323001234567',
    'male',
    '123456789',
    'Spain',
    'Cra 123 #45-67',
    'https://i.pravatar.cc/150?u=user-1',
    'user',
    '2023-01-01T10:00:00Z'
  )
}

export class UserApiMockRepository implements UserRepository {
  async getById(userId: string): Promise<User> {
    const user = mockUserDB[userId]
    if (!user) throw new Error('User not found')
    // Clon para evitar mutaciones externas
    return new User(
      user.id,
      user.firstName,
      user.lastName,
      user.email,
      user.phone,
      user.gender,
      user.taxId,
      user.country,
      user.address,
      user.avatarUrl,
      user.role,
      user.createdAt
    )
  }

  async update(updatedUser: User): Promise<void> {
    if (!mockUserDB[updatedUser.id]) throw new Error('User not found')
    mockUserDB[updatedUser.id] = updatedUser
  }
}
