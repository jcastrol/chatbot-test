import { IoSearchOutline } from 'react-icons/io5'
import { PrimaryButton } from '../atoms/PrimaryButton'
import { IconButton } from '../atoms/IconButton'

type Props = {
  onNewChat: () => void
  onSearchClick?: () => void
}

export function SearchActionBar({ onNewChat, onSearchClick }: Props) {
  return (
    <div className="px-6 pt-2 flex items-center justify-between gap-2">
      <PrimaryButton className="w-48" onClick={onNewChat}>
        + New chat
      </PrimaryButton>
      <IconButton onClick={onSearchClick}>
        <IoSearchOutline className="text-sm" />
      </IconButton>
    </div>
  )
}
