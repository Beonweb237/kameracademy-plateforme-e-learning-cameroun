import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Users, Star, Linkedin, Twitter, Facebook } from 'lucide-react'
import CourseCard from '@/components/CourseCard'
import { instructors, courses } from '@/data/mockData'

export default function InstructorProfile() {
  const { id } = useParams()
  const instructor = instructors.find((i) => i.id === Number(id)) ?? instructors[0]
  const instructorCourses = courses.filter((c) => c.instructor === instructor.name)

  return (
    <div className="pt-[72px] min-h-[100dvh] bg-white">
      {/* Header */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(180deg, #2d3748 0%, #1a202c 100%)' }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-ka-primary shrink-0"
          >
            <img src={instructor.avatar} alt={instructor.name} className="w-full h-full object-cover" />
          </motion.div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-white mb-2">{instructor.name}</h1>
            <p className="text-ka-primary-light text-lg mb-4">{instructor.title}</p>
            <p className="text-white/70 max-w-[560px] mb-6">{instructor.bio}</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-white/80 text-sm mb-6">
              <div className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>{instructor.courses} cours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{instructor.students.toLocaleString('fr-FR')} élèves</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-[#ed8936] fill-[#ed8936]" />
                <span>{instructor.rating} note moyenne</span>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-ka-dark mb-8">
            Cours de {instructor.name.split(' ')[0]}
          </h2>
          {instructorCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {instructorCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p className="text-ka-medium">Aucun cours disponible pour le moment.</p>
          )}
        </div>
      </section>
    </div>
  )
}
