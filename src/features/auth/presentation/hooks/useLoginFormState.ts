import { useState } from 'react'

export function useLoginFormState() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return {
    email,
    password,
    setEmail,
    setPassword
  }
}