'use client'
import { useAuthViewModel } from '@/features/auth/presentation/viewModels/useAuthViewModel'
import { AuthFormView } from '@/features/auth/presentation/views/AuthFormView'
import { handleLogin } from '@/app/actions/login'
import lorem from '@/data/lorem.json';

export default function Page() {
  const vm = useAuthViewModel(handleLogin)

  return (
    <div className="flex h-screen">
      {/* Lado izquierdo: branding */}
      <div className="w-1/2 bg-gradient-to-br from-[#4D96FF] to-[#C084FC] text-white p-10">
        <h1 className="text-4xl font-bold mb-4">Learn, Discover & Automate in One Place.</h1>
        <p className="text-lg">{lorem.paragraphs[0]}</p>
        
      </div>

      {/* Lado derecho: formulario */}
      <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
        <AuthFormView
          email={vm.email}
          password={vm.password}
          error={vm.error}
          onEmailChange={vm.setEmail}
          onPasswordChange={vm.setPassword}
          onSubmit={vm.login}
        />
      </div>
    </div>
  )
}