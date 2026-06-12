import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'
import type { Course } from '@/data/mockData'

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR') + ' FCFA'
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group bg-white rounded-xl border border-ka-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col"
    >
      <Link to={`/cours/${course.id}`} className="block">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2">
          <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-ka-primary-light text-ka-primary">
            {course.category}
          </span>
        </div>
        <Link to={`/cours/${course.id}`}>
          <h3 className="text-lg font-semibold text-ka-dark line-clamp-2 mb-1 leading-snug hover:text-ka-primary transition-colors duration-200">
            {course.title}
          </h3>
        </Link>
        <p className="text-sm text-ka-light mb-2">{course.instructor}</p>
        <div className="mb-3">
          <StarRating rating={course.rating} reviewCount={course.reviewCount} size={14} />
        </div>
        <div className="mt-auto flex items-center gap-2 flex-wrap">
          <span className="text-xl font-bold text-ka-primary">{formatPrice(course.price)}</span>
          <span className="text-sm text-ka-light line-through">{formatPrice(course.originalPrice)}</span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-ka-accent text-white">
            {course.discount}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
