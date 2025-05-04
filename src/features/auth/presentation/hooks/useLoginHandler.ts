import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginUser } from "@/features/auth/application/loginUser";
import { UserJsonRepository } from "../../infraestructura/UserFromJsonRepository";
import { loginAction } from "@/app/actions/login";

export function useLoginHandler(loginAction: loginAction) {
  const [error, setError] = useState("");
  const router = useRouter();
  

  const handleLogin = async (email: string, password: string) => {
    try {
      const { success, message } = await loginAction( email, password);
      
      if (!success) {
        setError("Correo o contraseña incorrectos.");
        return;
      }
      setError("");
      router.push("/chats");
    } catch {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return { handleLogin, error };
}
