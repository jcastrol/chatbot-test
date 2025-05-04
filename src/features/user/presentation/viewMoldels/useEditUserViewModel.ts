'use client'

import { useEffect, useState } from 'react'
import { getUserFromServerCookies } from '@/shared/lib/cookies/getUserFromServerCookies'
import { User } from '@/features/user/domain/entities/User'
import { GetUserDetail } from '@/features/user/application/getUserDetail'
import { UpdateUserProfile } from '@/features/user/application/updateUserProfile'
import { UserApiMockRepository } from '@/features/user/infrastructure/UserApiMockRepository'

export function useEditUserViewModel() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const repo = new UserApiMockRepository()
  const getUserDetail = new GetUserDetail(repo)
  const updateUserProfile = new UpdateUserProfile(repo)
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

  const updateField = <K extends keyof User>(field: K, value: User[K]) => {
    if (!user) return
    setUser({ ...user, [field]: value, fullName: `${user.firstName} ${user.lastName}`.trim() })
  }

  const saveChanges = async () => {
    if (!user) return
    setSaving(true)
    setError(null)
    setSuccess(false)
    try {
      await updateUserProfile.execute(user)
      setSuccess(true)
    } catch (e) {
      setError('Error al guardar los cambios')
    } finally {
      setSaving(false)
    }
  }

  return {
    user,
    loading,
    saving,
    error,
    success,
    updateField,
    saveChanges,
  }
}
