import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import CourseCard from '@/components/CourseCard'
import { courses, filterTabs } from '@/data/mockData'

export default function Catalogue() {
  const [activeTab, setActiveTab] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(8)

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesTab = activeTab === 'Tous' || course.category === activeTab
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesTab && matchesSearch
    })
  }, [activeTab, searchQuery])

  const visibleCourses = filteredCourses.slice(0, visibleCount)

  return (
    <div className="pt-[72px] min-h-[100dvh] bg-ka-background">
      {/* Header */}
      <section className="bg-white border-b border-ka-border py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ka-primary mb-3">
            CATALOGUE
          </p>
          <h1 className="text-3xl sm:text-[40px] font-bold text-ka-dark leading-[1.15] tracking-[-0.02em] mb-6">
            Toutes nos formations
          </h1>

          {/* Search Bar */}
          <div className="max-w-[560px]">
            <div className="flex items-center bg-ka-background rounded-xl border-2 border-transparent focus-within:border-ka-primary transition-colors duration-200 overflow-hidden">
              <Search size={20} className="text-ka-light ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Rechercher un cours ou un enseignant..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-12 px-3 text-sm text-ka-dark placeholder:text-ka-light outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setVisibleCount(8) }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-ka-primary text-white'
                    : 'bg-white text-ka-medium border border-ka-border hover:bg-ka-primary-light'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <p className="text-sm text-ka-medium mb-6">
            {filteredCourses.length} cours trouvé{filteredCourses.length > 1 ? 's' : ''}
          </p>

          {visibleCourses.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleCourses.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-ka-medium">Aucun cours ne correspond à votre recherche.</p>
            </div>
          )}

          {visibleCount < filteredCourses.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((c) => c + 8)}
                className="px-6 py-3 bg-white border border-ka-border text-ka-dark font-semibold rounded-xl hover:bg-ka-primary-light hover:border-ka-primary transition-colors duration-200"
              >
                Charger plus de cours
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
