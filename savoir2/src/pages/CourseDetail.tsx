import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PlayCircle, Clock, BarChart3, Globe, CheckCircle, Award, ChevronDown, ShieldCheck, RefreshCw, Smartphone } from 'lucide-react'
import { useState } from 'react'
import StarRating from '@/components/StarRating'
import InstructorCard from '@/components/InstructorCard'
import CourseCard from '@/components/CourseCard'
import { courses, instructors } from '@/data/mockData'

const modules = [
  { title: 'Introduction et fondamentaux', lessons: 5, duration: '1h 20min' },
  { title: 'Concepts intermédiaires', lessons: 8, duration: '2h 45min' },
  { title: 'Projets pratiques guidés', lessons: 6, duration: '3h 10min' },
  { title: 'Techniques avancées', lessons: 7, duration: '2h 30min' },
  { title: 'Projet final et certification', lessons: 3, duration: '1h 15min' },
]

const guaranteeBadges = [
  { icon: ShieldCheck, label: 'Garantie 30 jours satisfait ou remboursé' },
  { icon: RefreshCw, label: 'Mises à jour gratuites à vie' },
  { icon: Smartphone, label: 'Accessible sur mobile, tablette et ordinateur' },
]

const faqs = [
  { q: 'Ai-je besoin de prérequis pour suivre ce cours ?', a: 'Non, ce cours est conçu pour être accessible dès le niveau débutant, avec une progression pédagogique claire.' },
  { q: 'Le certificat est-il reconnu ?', a: 'Vous recevez un certificat de réussite Kimi Academy attestant de la validation du programme complet.' },
  { q: 'Puis-je suivre le cours à mon rythme ?', a: 'Oui, l\'accès est illimité dans le temps, vous progressez selon votre disponibilité.' },
  { q: 'Y a-t-il un support en cas de question ?', a: 'Un espace de discussion avec l\'instructeur et la communauté est disponible pour chaque module.' },
]

export default function CourseDetail() {
  const { id } = useParams()
  const [openModule, setOpenModule] = useState<number | null>(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const course = courses.find((c) => c.id === Number(id)) ?? courses[0]
  const instructor = instructors.find((i) => i.name === course.instructor) ?? instructors[0]

  const similarCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 4)

  const moreByInstructor = courses
    .filter((c) => c.instructor === course.instructor && c.id !== course.id)
    .slice(0, 3)

  const formatPrice = (price: number) => price.toLocaleString('fr-FR') + ' FCFA'

  return (
    <div className="pt-[72px] min-h-[100dvh] bg-white">
      {/* Hero */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(180deg, #2d3748 0%, #1a202c 100%)' }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-ka-primary-light text-ka-primary mb-4">
              {course.category}
            </span>
            <h1 className="text-3xl sm:text-[40px] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-4">
              {course.title}
            </h1>
            <p className="text-base text-white/70 leading-relaxed mb-6">
              {course.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <StarRating rating={course.rating} reviewCount={course.reviewCount} size={16} />
            </div>
            <p className="text-sm text-white/70">
              Formé par <span className="text-ka-primary-light font-medium">{course.instructor}</span>
            </p>
          </div>

          {/* Purchase card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.25)] h-fit"
          >
            <div className="relative aspect-video">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <PlayCircle size={56} className="text-white" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-ka-primary">{formatPrice(course.price)}</span>
                <span className="text-sm text-ka-light line-through">{formatPrice(course.originalPrice)}</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-ka-accent text-white">
                  {course.discount}
                </span>
              </div>
              <button className="w-full h-12 bg-ka-primary text-white font-semibold rounded-xl hover:bg-ka-primary-dark transition-colors duration-200 mb-3">
                Ajouter au panier
              </button>
              <Link
                to="/panier"
                className="block w-full h-12 leading-[48px] text-center border-2 border-ka-primary text-ka-primary font-semibold rounded-xl hover:bg-ka-primary-light transition-colors duration-200"
              >
                Acheter maintenant
              </Link>
              <div className="mt-6 space-y-3 text-sm text-ka-medium">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-ka-primary shrink-0" />
                  <span>Accès à vie</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 size={16} className="text-ka-primary shrink-0" />
                  <span>Niveau débutant à intermédiaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-ka-primary shrink-0" />
                  <span>Contenu en français</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-ka-primary shrink-0" />
                  <span>Certificat de réussite</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantee badges */}
      <section className="py-10 border-b border-ka-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {guaranteeBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ka-primary-light flex items-center justify-center shrink-0">
                <badge.icon size={18} className="text-ka-primary" />
              </div>
              <p className="text-sm text-ka-medium">{badge.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program + Instructor */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-ka-dark mb-6">Programme du cours</h2>
            <div className="space-y-3">
              {modules.map((module, i) => (
                <div key={module.title} className="border border-ka-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenModule(openModule === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 bg-ka-background hover:bg-ka-primary-light/50 transition-colors duration-200"
                  >
                    <div className="text-left">
                      <p className="font-semibold text-ka-dark">{module.title}</p>
                      <p className="text-sm text-ka-light">{module.lessons} leçons &middot; {module.duration}</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-ka-medium shrink-0 transition-transform duration-200 ${openModule === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openModule === i && (
                    <div className="p-4 border-t border-ka-border">
                      <ul className="space-y-2">
                        {Array.from({ length: module.lessons }).map((_, li) => (
                          <li key={li} className="flex items-center gap-2 text-sm text-ka-medium">
                            <CheckCircle size={14} className="text-ka-primary shrink-0" />
                            <span>Leçon {li + 1} : {module.title.toLowerCase()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Reviews */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-ka-dark mb-6">Avis des étudiants</h2>
              <div className="flex items-center gap-4 mb-6">
                <StarRating rating={course.rating} reviewCount={course.reviewCount} size={20} />
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Bertrand K.', text: 'Excellent cours, très bien structuré et l\'instructeur explique clairement.' },
                  { name: 'Ange M.', text: 'J\'ai beaucoup appris, le contenu est adapté au contexte camerounais.' },
                ].map((review) => (
                  <div key={review.name} className="p-4 bg-ka-background rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-ka-dark text-sm">{review.name}</p>
                      <StarRating rating={5} size={12} />
                    </div>
                    <p className="text-sm text-ka-medium">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Instructor */}
          <div>
            <h2 className="text-2xl font-bold text-ka-dark mb-6">Votre instructeur</h2>
            <InstructorCard instructor={instructor} />

            {moreByInstructor.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-ka-dark mb-4">
                  Plus de cours par {instructor.name.split(' ')[0]}
                </h3>
                <div className="space-y-3">
                  {moreByInstructor.map((c) => (
                    <Link
                      key={c.id}
                      to={`/cours/${c.id}`}
                      className="flex gap-3 p-3 border border-ka-border rounded-xl hover:border-ka-primary transition-colors duration-200"
                    >
                      <img src={c.image} alt={c.title} className="w-16 aspect-video object-cover rounded-lg shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-ka-dark line-clamp-2">{c.title}</p>
                        <p className="text-xs text-ka-light mt-1">{formatPrice(c.price)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-ka-background">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-ka-dark mb-8">Questions fréquentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="bg-white border border-ka-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium text-ka-dark text-sm">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-ka-medium shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-ka-medium">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Similar courses */}
      {similarCourses.length > 0 && (
        <section className="py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-ka-dark mb-8">Cours similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarCourses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
