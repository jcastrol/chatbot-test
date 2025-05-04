'use client'


import { useEditUserViewModel } from '@/features/user/presentation/viewMoldels/useEditUserViewModel'
import { UserView } from '@/features/user/presentation/views/UserView'

export default function Page() {
  const {
    user,
    loading,
    saving,
    error,
    success,
    updateField,
    saveChanges
  } = useEditUserViewModel()

  if (loading) return <div className="p-6">Cargando perfil...</div>
  if (!user) return <div className="p-6">Usuario no encontrado</div>

  return (
    <UserView
      user={user}
      saving={saving}
      error={error}
      success={success}
      onChange={updateField}
      onSave={saveChanges}
    />
  )
}
