import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export function useLogout() {
  const router = useRouter()

  const logout = () => {
    Cookies.remove('user')
    router.replace('/login')
  }

  return { logout }
}
