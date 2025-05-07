'use client'

import { Header } from '../components/molecules/Header'
import { SearchActionBar } from '../components/molecules/SearchActionBar'
import { SettingsButton } from '../components/molecules/SettingsButton'
import { UserProfileButton } from '../components/molecules/UserProfileButton'
import { ChatSectionHeader } from '../components/organisms/ChatSectionHeader'
import { ChatList } from '../components/organisms/ChatList'
import { ChatTitle, User } from '@/shared/types'

type Props = {
  chats: ChatTitle[]
  selectedChatId?: string
  loading?: boolean
  onNewChat: () => void
  onSelect: (chatId: string) => void
  onClearAll?: () => void
  onSettings?: () => void
  onUserProfile?: () => void
  user: User
}

export function ChatSidebarView({
  chats,
  selectedChatId,
  loading,
  onNewChat,
  onSelect,
  onClearAll,
  onSettings,
  onUserProfile,
  user
}: Props) {
  return (
    <div className="w-72 bg-white text-black flex flex-col rounded-2xl m-4 shadow-sm overflow-hidden">
      <Header />
      <SearchActionBar onNewChat={onNewChat} />
      <ChatSectionHeader onClearAll={onClearAll} />
      <ChatList
        chats={chats}
        selectedChatId={selectedChatId}
        loading={loading}
        onSelect={onSelect}
      />
      <div className="px-6 py-4 text-sm text-gray-600 space-y-3">
        <SettingsButton onClick={onSettings} />
        <UserProfileButton
          fullName={user.fullName}
          avatarUrl={user.avatarUrl}
          onClick={onUserProfile}
        />
      </div>
    </div>
  )
}
