import { Avatar } from '../atoms/Avatar'

type Props = {
  fullName: string
  avatarUrl: string | null
  onClick?: () => void
}

export function UserProfileButton({ fullName, avatarUrl, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-full text-gray-600 hover:bg-gray-100"
    >
      <Avatar src={avatarUrl} />
      <span className="text-sm font-medium">{fullName}</span>
    </button>
  )
}
