import { Link } from 'react-router-dom'
import { Settings } from 'lucide-react'

export default function AdminFAB() {
  return (
    <Link
      to="/admin"
      className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-ka-secondary flex items-center justify-center shadow-lg hover:bg-ka-dark transition-colors duration-200"
      title="Administration"
    >
      <Settings size={24} className="text-white" />
    </Link>
  )
}
