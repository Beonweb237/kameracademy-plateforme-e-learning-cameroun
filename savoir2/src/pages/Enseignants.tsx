import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, BookOpen, Star, DollarSign, Award, TrendingUp } from 'lucide-react'
import InstructorCard from '@/components/InstructorCard'
import { instructors, filterTabs } from '@/data/mockData'

const becomeInstructorBenefits = [
  { icon: DollarSign, title: 'Revenus attractifs', desc: 'Gardez jusqu\'à 70% du prix de vente de vos formations.' },
  { icon: Users, title: 'Audience qualifiée', desc: 'Accédez à des milliers d\'apprenants camerounais motivés.' },
  { icon: Award, title: 'Accompagnement', desc: 'Une équipe dédiée vous aide à produire un contenu de qualité.' },
]

export default function Enseignants() {
  const [activeTab, setActiveTab] = useState('Tous')

  const filteredInstructors = useMemo(() => {
    if (activeTab === 'Tous') return instructors
    return instructors.filter((i) => i.title.toLowerCase().includes(activeTab.toLowerCase()))
  }, [activeTab])

  const globalStats = useMemo(() => {
    const totalStudents = instructors.reduce((sum, i) => sum + i.students, 0)
    const totalCourses = instructors.reduce((sum, i) => sum + i.courses, 0)
    const avgRating = (instructors.reduce((sum, i) => sum + i.rating, 0) / instructors.length).toFixed(1)
    return [
      { icon: Users, value: `${(totalStudents / 1000).toFixed(1)}k`, label: 'Élèves formés' },
      { icon: BookOpen, value: `${totalCourses}`, label: 'Cours publiés' },
      { icon: Star, value: avgRating, label: 'Note moyenne' },
      { icon: TrendingUp, value: `${instructors.length}`, label: 'Enseignants actifs' },
    ]
  }, [])

  const featuredInstructors = useMemo(
    () => [...instructors].sort((a, b) => b.students - a.students).slice(0, 2),
    []
  )

  return (
    <div className="pt-[72px] min-h-[100dvh] bg-ka-background">
      {/* Header */}
      <section className="bg-white border-b border-ka-border py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ka-primary mb-3">
                NOS ENSEIGNANTS
              </p>
              <h1 className="text-3xl sm:text-[40px] font-bold text-ka-dark leading-[1.15] tracking-[-0.02em]">
                Apprenez avec les meilleurs experts
              </h1>
            </div>
            <Link
              to="/inscription"
              className="h-12 px-6 bg-ka-primary text-white font-semibold rounded-xl hover:bg-ka-primary-dark transition-colors duration-200 flex items-center justify-center shrink-0"
            >
              Devenir instructeur
            </Link>
          </div>

          {/* Global stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {globalStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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

      {/* Featured instructors */}
      <section className="py-14 bg-white border-b border-ka-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-ka-dark mb-8">Enseignants à la une</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {featuredInstructors.map((instructor) => (
              <div key={instructor.id} className="flex gap-6 p-6 rounded-2xl bg-ka-background">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-ka-primary-light shrink-0"
                />
                <div>
                  <h3 className="text-lg font-semibold text-ka-dark">{instructor.name}</h3>
                  <p className="text-sm text-ka-primary mb-2">{instructor.title}</p>
                  <p className="text-sm text-ka-medium mb-3">{instructor.bio}</p>
                  <Link
                    to={`/enseignants/${instructor.id}`}
                    className="text-sm font-medium text-ka-primary hover:text-ka-primary-dark transition-colors duration-200"
                  >
                    Voir le profil →
                  </Link>
                </div>
              </div>
            ))}
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
                onClick={() => setActiveTab(tab)}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredInstructors.map((instructor, i) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <InstructorCard instructor={instructor} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become instructor CTA */}
      <section className="py-16 bg-ka-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Partagez votre expertise, générez des revenus
            </h2>
            <p className="text-white/70 max-w-[560px] mx-auto">
              Rejoignez notre communauté d'enseignants et transformez votre savoir-faire en source de revenus.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {becomeInstructorBenefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={24} className="text-ka-primary-light" />
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/60">{benefit.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/inscription"
              className="inline-flex h-12 px-8 items-center bg-ka-primary text-white font-semibold rounded-xl hover:bg-ka-primary-dark transition-colors duration-200"
            >
              Devenir instructeur
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
