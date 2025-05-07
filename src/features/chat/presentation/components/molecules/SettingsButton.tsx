import { IoSettingsOutline } from 'react-icons/io5'

export function SettingsButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-full text-gray-600 hover:bg-gray-100"
    >
      <IoSettingsOutline />
      <span className="text-sm font-medium">Settings</span>
    </button>
  )
}
