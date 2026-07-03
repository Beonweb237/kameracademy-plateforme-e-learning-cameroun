import { Link } from 'react-router-dom'
import { Award, Clock, TrendingUp, Flame, Target, Zap, BookOpen, Star } from 'lucide-react'
import { courses } from '@/data/mockData'

const inProgress = [
  { course: courses[0], progress: 65 },
  { course: courses[2], progress: 30 },
]

const completed = [courses[4], courses[7]]

const recommended = courses.slice(6, 12)

const weeklyProgress = [
  { day: 'Lun', hours: 1.5 },
  { day: 'Mar', hours: 2 },
  { day: 'Mer', hours: 0.5 },
  { day: 'Jeu', hours: 1 },
  { day: 'Ven', hours: 2.5 },
  { day: 'Sam', hours: 3 },
  { day: 'Dim', hours: 0 },
]

const achievements = [
  { icon: Flame, label: 'Série de 7 jours', unlocked: true, desc: 'Apprendre 7 jours consécutifs' },
  { icon: Target, label: 'Premier cours terminé', unlocked: true, desc: 'Terminer un cours à 100%' },
  { icon: Zap, label: 'Apprenant rapide', unlocked: true, desc: 'Terminer un module en une session' },
  { icon: BookOpen, label: 'Collectionneur', unlocked: false, desc: 'S\'inscrire à 5 cours différents' },
  { icon: Star, label: 'Critique assidu', unlocked: false, desc: 'Laisser 3 avis sur des cours' },
]

export default function TableauDeBord() {
  return (
    <div className="pt-[72px] min-h-[100dvh] bg-ka-background">
      <section className="py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-[40px] font-bold text-ka-dark leading-[1.15] tracking-[-0.02em] mb-2">
            Mon espace apprenant
          </h1>
          <p className="text-ka-medium mb-10">Suivez votre progression et continuez à apprendre.</p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl border border-ka-border p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-ka-primary-light flex items-center justify-center shrink-0">
                <Clock size={22} className="text-ka-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-ka-dark">{inProgress.length}</p>
                <p className="text-sm text-ka-medium">Cours en cours</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-ka-border p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-ka-primary-light flex items-center justify-center shrink-0">
                <Award size={22} className="text-ka-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-ka-dark">{completed.length}</p>
                <p className="text-sm text-ka-medium">Certificats obtenus</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-ka-border p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-ka-primary-light flex items-center justify-center shrink-0">
                <TrendingUp size={22} className="text-ka-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-ka-dark">48%</p>
                <p className="text-sm text-ka-medium">Progression moyenne</p>
              </div>
            </div>
          </div>

          {/* In progress */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-ka-dark mb-6">Cours en cours</h2>
            <div className="space-y-4">
              {inProgress.map(({ course, progress }) => (
                <Link
                  key={course.id}
                  to={`/cours/${course.id}`}
                  className="flex gap-4 bg-white rounded-xl border border-ka-border p-4 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-200"
                >
                  <img src={course.image} alt={course.title} className="w-32 aspect-video object-cover rounded-lg shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-ka-dark mb-2 truncate">{course.title}</h3>
                    <div className="w-full h-2 bg-ka-background rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-ka-primary rounded-full" style={{ width: `${progress}%` }} />
                    </div>
                    <p className="text-sm text-ka-medium">{progress}% terminé</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Weekly progress chart */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-ka-dark mb-6">Progression cette semaine</h2>
            <div className="bg-white rounded-xl border border-ka-border p-6">
              <div className="flex items-end justify-between gap-2 h-32">
                {weeklyProgress.map((day) => (
                  <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex items-end justify-center h-24">
                      <div
                        className="w-full max-w-[32px] bg-ka-primary rounded-t-md"
                        style={{ height: `${(day.hours / 3) * 100}%`, minHeight: day.hours > 0 ? '4px' : '0' }}
                      />
                    </div>
                    <p className="text-xs text-ka-medium">{day.day}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-ka-medium mt-4 text-center">
                Total : {weeklyProgress.reduce((sum, d) => sum + d.hours, 0)}h cette semaine
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-ka-dark mb-6">Badges & réussites</h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {achievements.map((badge) => (
                <div
                  key={badge.label}
                  className={`p-4 rounded-xl border text-center ${
                    badge.unlocked ? 'bg-white border-ka-border' : 'bg-ka-background border-ka-border opacity-50'
                  }`}
                >
                  <badge.icon size={24} className={`mx-auto mb-2 ${badge.unlocked ? 'text-ka-accent' : 'text-ka-light'}`} />
                  <p className="text-xs font-semibold text-ka-dark mb-1">{badge.label}</p>
                  <p className="text-[11px] text-ka-light">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Completed */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-ka-dark mb-6">Certificats obtenus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {completed.map((course) => (
                <div key={course.id} className="flex items-center gap-4 bg-white rounded-xl border border-ka-border p-4">
                  <Award size={32} className="text-ka-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-ka-dark truncate">{course.title}</p>
                    <p className="text-sm text-ka-light">Certificat délivré</p>
                  </div>
                  <button className="text-sm font-medium text-ka-primary hover:text-ka-primary-dark transition-colors duration-200 shrink-0">
                    Télécharger
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended */}
          <div>
            <h2 className="text-xl font-bold text-ka-dark mb-6">Recommandé pour vous</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {recommended.map((course) => (
                <Link
                  key={course.id}
                  to={`/cours/${course.id}`}
                  className="group block bg-white rounded-xl border border-ka-border overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-200"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <p className="p-3 text-sm font-medium text-ka-dark line-clamp-2">{course.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
