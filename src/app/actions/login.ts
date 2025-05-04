'use server'

import { cookies } from 'next/headers'
import { LoginUser } from '@/features/auth/application/loginUser'
import { UserJsonRepository } from '@/features/auth/infraestructura/UserFromJsonRepository'

export type loginAction =(email: string, password: string)=>Promise<{
    success: boolean;
    message?: undefined;
} | {
    success: boolean;
    message: string;
}>
export async function handleLogin  (email: string, password: string) {
  try {
    
    const loginUseCase = new LoginUser(new UserJsonRepository());
    const user = await loginUseCase.execute(email, password)
    const cookieStore = await cookies()
    cookieStore.set('user', JSON.stringify(
        { id: user.id, name: user.name, email: user.email}
    ), { secure: true})
    return { success: true }
  } catch(e) {
    console.error(e)
    return { success: false, message: 'Correo o contraseña incorrectos.' }
  }
}
