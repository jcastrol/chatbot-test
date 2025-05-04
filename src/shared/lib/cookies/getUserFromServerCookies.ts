'use server'
import { cookies } from 'next/headers'

export async function  getUserFromServerCookies() {
  const rawCookies = await cookies()
  const raw = rawCookies.get('user')?.value
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}


