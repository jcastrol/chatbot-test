import { loginAction } from "@/app/actions/login";
import { useLoginFormState } from "../hooks/useLoginFormState";
import { useLoginHandler } from "../hooks/useLoginHandler";

export function useAuthViewModel(
  loginAction: loginAction
) {
  const { email, password, setEmail, setPassword } = useLoginFormState();
    const { error, handleLogin } = useLoginHandler(loginAction);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password)
      
  };

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    login,
  };
}
