import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Search,
  ChevronDown,
  CheckCircle,
  Award,
  DollarSign,
  Users,
  Smartphone,
  RefreshCw,
  Shield,
  ArrowRight,
  Quote,
} from 'lucide-react'
import CourseCard from '@/components/CourseCard'
import InstructorCard from '@/components/InstructorCard'
import StarRating from '@/components/StarRating'
import { courses, instructors, categories, testimonials, stats, filterTabs } from '@/data/mockData'

/* ────────────────────────────── helpers ────────────────────────────── */

function useCountUp(end: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    if (!started) return
    startTimeRef.current = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [end, duration, started])

  return count
}

/* ────────────────────────────── Hero ────────────────────────────── */

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const trustBadges = [
    '+500 Cours disponibles',
    '+50 Enseignants certifiés',
    '+10 000 Apprenants',
    'Accès illimité à vie',
  ]

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,32,44,0.92)] to-[rgba(40,94,97,0.85)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 text-center pt-[72px]">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.15em] text-ka-primary-light mb-6"
        >
          🇨🇲 LA PREMIÈRE PLATEFORME E-LEARNING DU CAMEROUN
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-[-0.03em] max-w-[720px] mx-auto mb-6"
        >
          Apprenez sans limites. Enseignez au monde.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="text-base sm:text-lg font-normal text-white/85 max-w-[560px] mx-auto mb-10 leading-relaxed"
        >
          Des milliers de formations en ligne créées par des experts camerounais. Développez vos compétences, lancez votre business, transformez votre avenir.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="max-w-[640px] mx-auto mb-10"
        >
          <div className="flex items-center bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] border-2 border-transparent focus-within:border-ka-primary transition-colors duration-200 overflow-hidden">
            <Search size={22} className="text-ka-light ml-4 shrink-0" />
            <input
              type="text"
              placeholder="Que souhaitez-vous apprendre ?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 h-14 px-3 text-base text-ka-dark placeholder:text-ka-light outline-none bg-transparent"
            />
            <button className="h-12 px-5 mr-1 bg-ka-primary text-white font-semibold text-sm rounded-lg hover:bg-ka-primary-dark transition-colors duration-200 shrink-0">
              Rechercher
            </button>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 text-sm text-white/80"
            >
              <CheckCircle size={18} className="text-ka-primary-light shrink-0" />
              <span>{badge}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="animate-bounce-gentle"
        >
          <ChevronDown size={28} className="text-white/50 mx-auto" />
        </motion.div>
      </div>
    </section>
  )
}

/* ────────────────────────── Featured Courses ────────────────────────── */

function FeaturedCoursesSection() {
  const [activeTab, setActiveTab] = useState('Tous')

  const filteredCourses = activeTab === 'Tous'
    ? courses.slice(0, 8)
    : courses.filter((c) => c.category === activeTab).slice(0, 8)

  return (
    <section className="bg-white py-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.1em] text-ka-primary mb-3"
          >
            FORMATIONS POPULAIRES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-[40px] font-bold text-ka-dark leading-[1.15] tracking-[-0.02em] mb-4"
          >
            Cours les plus vendus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-ka-medium max-w-[600px] mx-auto"
          >
            Découvrez les formations préférées des apprenants camerounais
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-ka-primary text-white'
                  : 'bg-ka-background text-ka-medium border border-ka-border hover:bg-ka-primary-light'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-2 text-base font-semibold text-ka-primary hover:gap-3 transition-all duration-200"
          >
            Explorer tous les cours
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Categories ─────────────────────────── */

function CategoriesSection() {
  return (
    <section className="bg-ka-background py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.1em] text-ka-primary mb-3"
          >
            EXPLORER PAR CATÉGORIE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-[40px] font-bold text-ka-dark leading-[1.15] tracking-[-0.02em] mb-4"
          >
            Trouvez votre domaine
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-ka-medium max-w-[600px]"
          >
            Des formations dans tous les secteurs clés de l'économie camerounaise
          </motion.p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
            >
              <Link
                to="/catalogue"
                className="group block relative h-[200px] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ka-secondary/70 to-ka-secondary/30 group-hover:from-ka-secondary/60 group-hover:to-ka-secondary/20 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{cat.name}</h3>
                  <p className="text-sm text-ka-primary-light">{cat.courseCount} cours</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── Why Choose Kimi Academy ───────────────────── */

function WhyChooseSection() {
  const features = [
    {
      icon: Award,
      title: 'Formations certifiantes',
      desc: 'Obtenez des certificats reconnus pour booster votre carrière',
    },
    {
      icon: DollarSign,
      title: 'Prix accessibles',
      desc: 'Des formations de qualité à des prix adaptés au contexte camerounais',
    },
    {
      icon: Users,
      title: 'Enseignants experts',
      desc: 'Apprenez auprès de professionnels expérimentés et passionnés',
    },
    {
      icon: Smartphone,
      title: 'Apprendre partout',
      desc: 'Accédez à vos cours sur mobile, tablette ou ordinateur',
    },
    {
      icon: RefreshCw,
      title: 'Mises à jour gratuites',
      desc: 'Bénéficiez des nouveaux contenus sans frais supplémentaires',
    },
    {
      icon: Shield,
      title: 'Garantie 30 jours',
      desc: 'Satisfait ou remboursé sous 30 jours après l\'achat',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ka-primary mb-3">
              POURQUOI KIMI ACADEMY ?
            </p>
            <h2 className="text-3xl sm:text-[40px] font-bold text-ka-dark leading-[1.15] tracking-[-0.02em] mb-6">
              La meilleure plateforme pour apprendre et enseigner au Cameroun
            </h2>
            <p className="text-base text-ka-medium leading-relaxed mb-6">
              Nous connectons les meilleurs enseignants camerounais avec des milliers d'apprenants ambitieux. Notre mission : démocratiser l'accès à l'éducation numérique de qualité.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-base font-semibold text-ka-primary hover:gap-3 transition-all duration-200"
            >
              En savoir plus
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Right Column - Feature Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                }}
                className="flex flex-col"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1 + 0.1,
                    ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
                  }}
                  className="w-20 h-20 rounded-full bg-ka-primary-light flex items-center justify-center mb-4"
                >
                  <feature.icon size={32} className="text-ka-primary" />
                </motion.div>
                <h4 className="text-lg font-semibold text-ka-dark mb-2">{feature.title}</h4>
                <p className="text-sm text-ka-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── Top Instructors ─────────────────────── */

function InstructorsSection() {
  const topInstructors = instructors.slice(0, 4)

  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #2d3748 0%, #1a202c 100%)' }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.1em] text-ka-primary-light mb-3"
          >
            NOS ENSEIGNANTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-[40px] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-4"
          >
            Apprenez avec les meilleurs experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-white/70 max-w-[600px] mx-auto"
          >
            Des professionnels camerounais passionnés par le partage des connaissances
          </motion.p>
        </div>

        {/* Instructor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topInstructors.map((instructor, i) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-85px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
              }}
            >
              <InstructorCard instructor={instructor} variant="dark" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────── Stats & Testimonials ────────────────────── */

function StatCounter({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const count = useCountUp(value, 2000, started)

  return (
    <div className="text-center">
      <div className="font-mono text-4xl sm:text-5xl font-bold text-white mb-2 tracking-[-0.02em]">
        {count.toLocaleString('fr-FR')}{suffix}
      </div>
      <p className="text-base text-ka-primary-light">{label}</p>
    </div>
  )
}

function StatsSection() {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-ka-primary py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              started={started}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-12" />

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
            >
              <div className="bg-white rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300">
                <Quote size={24} className="text-ka-primary mb-4" />
                <p className="text-base text-ka-medium leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ka-dark">{t.author}</p>
                    <p className="text-xs text-ka-light">{t.role}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <StarRating rating={t.rating} size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── CTA Banner ───────────────────────── */

function CTASection() {
  return (
    <section className="bg-ka-background py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-ka-dark mb-4">
              Prêt à transformer votre avenir ?
            </h2>
            <p className="text-base text-ka-medium">
              Rejoignez des milliers d'apprenants camerounais et accédez à des formations de qualité dès aujourd'hui.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:w-2/5 flex flex-col sm:flex-row lg:justify-end gap-3 w-full"
          >
            <Link
              to="/inscription"
              className="h-12 px-6 bg-ka-primary text-white font-semibold rounded-xl hover:bg-ka-primary-dark transition-colors duration-200 flex items-center justify-center"
            >
              Commencer gratuitement
            </Link>
            <Link
              to="/enseignants"
              className="h-12 px-6 border-2 border-ka-primary text-ka-primary font-semibold rounded-xl hover:bg-ka-primary-light transition-colors duration-200 flex items-center justify-center"
            >
              Devenir instructeur
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── Home ──────────────────────────── */

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCoursesSection />
      <CategoriesSection />
      <WhyChooseSection />
      <InstructorsSection />
      <StatsSection />
      <CTASection />
    </>
  )
}
