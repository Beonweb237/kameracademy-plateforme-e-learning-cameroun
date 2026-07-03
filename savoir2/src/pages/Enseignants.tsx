import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import InstructorCard from '@/components/InstructorCard'
import { instructors, filterTabs } from '@/data/mockData'

export default function Enseignants() {
  const [activeTab, setActiveTab] = useState('Tous')

  const filteredInstructors = useMemo(() => {
    if (activeTab === 'Tous') return instructors
    return instructors.filter((i) => i.title.toLowerCase().includes(activeTab.toLowerCase()))
  }, [activeTab])

  return (
    <div className="pt-[72px] min-h-[100dvh] bg-ka-background">
      {/* Header */}
      <section className="bg-white border-b border-ka-border py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
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
    </div>
  )
}
