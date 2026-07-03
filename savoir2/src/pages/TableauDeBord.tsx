import { Link } from 'react-router-dom'
import { Award, Clock, TrendingUp } from 'lucide-react'
import { courses } from '@/data/mockData'

const inProgress = [
  { course: courses[0], progress: 65 },
  { course: courses[2], progress: 30 },
]

const completed = [courses[4], courses[7]]

const recommended = courses.slice(8, 12)

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
