// "use client"
// import { useAuthGuard } from "@/shared/hooks/useAuthGuard"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"

export default function Page() {
  // useAuthGuard()

  // const router = useRouter()

  // useEffect(() => {
  //   // Si pasa el guard, redirige a /chats
  //   const user = localStorage.getItem('user')
  //   if (user) {
  //     router.replace('/chats')
  //   }
  // }, [router])

  return null // redirige automáticamente vía middleware
}

