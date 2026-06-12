import { motion } from 'framer-motion'
import { BookOpen, Users, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Instructor } from '@/data/mockData'

interface InstructorCardProps {
  instructor: Instructor
  variant?: 'light' | 'dark'
}

export default function InstructorCard({ instructor, variant = 'light' }: InstructorCardProps) {
  const isDark = variant === 'dark'

  const formatStudents = (count: number) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
    }
    return count.toString()
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`rounded-2xl border p-6 text-center flex flex-col items-center ${
        isDark
          ? 'bg-white/5 border-white/10 hover:border-ka-primary hover:bg-white/[0.08]'
          : 'bg-white border-ka-border hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]'
      }`}
    >
      <div className={`w-20 h-20 rounded-full overflow-hidden mb-4 border-[3px] ${isDark ? 'border-ka-primary' : 'border-ka-primary-light'}`}>
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className={`text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-ka-dark'}`}>
        {instructor.name}
      </h3>
      <p className={`text-sm mb-4 ${isDark ? 'text-[#a0aec0]' : 'text-ka-light'}`}>
        {instructor.title}
      </p>
      <div className={`flex items-center gap-4 mb-4 text-sm ${isDark ? 'text-[#e2e8f0]' : 'text-ka-medium'}`}>
        <div className="flex items-center gap-1">
          <BookOpen size={14} />
          <span>{instructor.courses} cours</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={14} />
          <span>{formatStudents(instructor.students)} élèves</span>
        </div>
        <div className="flex items-center gap-1">
          <Star size={14} className="text-[#ed8936] fill-[#ed8936]" />
          <span>{instructor.rating}</span>
        </div>
      </div>
      <div className={`w-full border-t mb-4 ${isDark ? 'border-white/10' : 'border-ka-border'}`} />
      <p className={`text-sm line-clamp-2 mb-4 ${isDark ? 'text-white/60' : 'text-ka-light'}`}>
        {instructor.bio}
      </p>
      <Link
        to={`/enseignants/${instructor.id}`}
        className={`text-sm font-medium transition-colors duration-200 ${
          isDark ? 'text-ka-primary-light hover:text-white' : 'text-ka-primary hover:text-ka-primary-dark'
        }`}
      >
        Voir le profil →
      </Link>
    </motion.div>
  )
}
