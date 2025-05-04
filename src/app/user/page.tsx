'use client'

import { useLogout } from '@/features/auth/presentation/hooks/useLogout'
import { useUserProfileViewModel } from '@/features/user/presentation/viewMoldels/useUserProfileViewModel'
import { UserProfileView } from '@/features/user/presentation/views/UserProfileView'

export default function Page() {
  const { user, loading } = useUserProfileViewModel()
  const {logout}= useLogout()

  if (loading) return <div className="p-6">Cargando perfil...</div>
  if (!user) return <div className="p-6">Usuario no encontrado</div>

  return <UserProfileView user={user} logout={logout} />
}
