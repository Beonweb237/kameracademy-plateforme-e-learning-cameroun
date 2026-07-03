import { useState, useMemo } from 'react'
import { Search, TrendingUp, BookOpen, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import CourseCard from '@/components/CourseCard'
import { courses, filterTabs, categories } from '@/data/mockData'

const catalogueStats = [
  { icon: BookOpen, value: `${courses.length}+`, label: 'Cours disponibles' },
  { icon: Users, value: '10 000+', label: 'Apprenants actifs' },
  { icon: Award, value: `${categories.length}`, label: 'Domaines couverts' },
]

export default function Catalogue() {
  const [activeTab, setActiveTab] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(8)
  const [sortBy, setSortBy] = useState<'popularite' | 'prix-croissant' | 'prix-decroissant'>('popularite')

  const filteredCourses = useMemo(() => {
    const result = courses.filter((course) => {
      const matchesTab = activeTab === 'Tous' || course.category === activeTab
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesTab && matchesSearch
    })
    const sorted = [...result]
    if (sortBy === 'prix-croissant') sorted.sort((a, b) => a.price - b.price)
    if (sortBy === 'prix-decroissant') sorted.sort((a, b) => b.price - a.price)
    if (sortBy === 'popularite') sorted.sort((a, b) => b.reviewCount - a.reviewCount)
    return sorted
  }, [activeTab, searchQuery, sortBy])

  const trendingCourses = useMemo(
    () => [...courses].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 3),
    []
  )

  const visibleCourses = filteredCourses.slice(0, visibleCount)

  return (
    <div className="pt-[72px] min-h-[100dvh] bg-ka-background">
      {/* Header / Hero */}
      <section className="bg-white border-b border-ka-border py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ka-primary mb-3">
            CATALOGUE
          </p>
          <h1 className="text-3xl sm:text-[40px] font-bold text-ka-dark leading-[1.15] tracking-[-0.02em] mb-4">
            Toutes nos formations
          </h1>
          <p className="text-base text-ka-medium max-w-[560px] mb-8">
            Explorez {courses.length} formations créées par des experts camerounais dans {categories.length} domaines clés de l'économie.
          </p>

          {/* Search Bar */}
          <div className="max-w-[560px] mb-10">
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

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {catalogueStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-11 h-11 rounded-full bg-ka-primary-light flex items-center justify-center shrink-0">
                  <stat.icon size={20} className="text-ka-primary" />
                </div>
                <div>
                  <p className="text-lg font-bold text-ka-dark">{stat.value}</p>
                  <p className="text-xs text-ka-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending courses */}
      <section className="py-14 bg-white border-b border-ka-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp size={20} className="text-ka-accent" />
            <h2 className="text-2xl font-bold text-ka-dark">Formations tendance</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trendingCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap items-center gap-3">
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
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="h-10 px-4 rounded-lg border border-ka-border text-sm text-ka-dark bg-white outline-none focus:border-ka-primary"
            >
              <option value="popularite">Plus populaires</option>
              <option value="prix-croissant">Prix croissant</option>
              <option value="prix-decroissant">Prix décroissant</option>
            </select>
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

      {/* Newsletter CTA */}
      <section className="py-16 bg-ka-primary">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ne manquez aucune nouvelle formation
          </h2>
          <p className="text-white/80 mb-8">
            Recevez chaque semaine une sélection de cours et de promotions exclusives.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto"
          >
            <input
              type="email"
              placeholder="Votre adresse email"
              required
              className="flex-1 h-12 px-4 rounded-xl outline-none text-sm"
            />
            <button
              type="submit"
              className="h-12 px-6 bg-white text-ka-primary font-semibold rounded-xl hover:bg-ka-background transition-colors duration-200 shrink-0"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
