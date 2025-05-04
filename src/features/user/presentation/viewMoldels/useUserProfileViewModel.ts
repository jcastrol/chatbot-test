'use client'

import { useEffect, useState } from 'react'
import { User } from '@/features/user/domain/entities/User'
import { GetUserDetail } from '@/features/user/application/getUserDetail'
import { UserApiMockRepository } from '@/features/user/infrastructure/UserApiMockRepository'
import { getUserFromServerCookies } from '@/shared/lib/cookies/getUserFromServerCookies'

export function useUserProfileViewModel() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const repo = new UserApiMockRepository()
  const getUserDetail = new GetUserDetail(repo)

  const loadUser = async () => {
    const session = await getUserFromServerCookies()
    if (!session) return

    setLoading(true)
    getUserDetail.execute(session.id)
      .then(setUser)
      .catch(() => setError('No se pudo cargar el usuario'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadUser()
  }, [])

  return { user, loading }
}
