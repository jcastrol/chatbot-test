const STORAGE_KEY = 'chats_by_user'

export function getChatsFromStorage(): any[] {
  if (typeof window === 'undefined') return []
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : []
}

export function saveChatsToStorage(data: any[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}
