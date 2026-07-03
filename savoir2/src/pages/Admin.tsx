import { Users, BookOpen, DollarSign, TrendingUp } from 'lucide-react'
import { courses, instructors } from '@/data/mockData'

const stats = [
  { icon: BookOpen, label: 'Cours publiés', value: courses.length },
  { icon: Users, label: 'Enseignants actifs', value: instructors.length },
  { icon: TrendingUp, label: 'Apprenants inscrits', value: '10 240' },
  { icon: DollarSign, label: 'Revenus du mois', value: '2 450 000 FCFA' },
]

export default function Admin() {
  return (
    <div className="pt-[72px] min-h-[100dvh] bg-ka-background">
      <section className="py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-ka-dark mb-2">Administration</h1>
          <p className="text-ka-medium mb-10">Vue d'ensemble de la plateforme Kimi Academy.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl border border-ka-border p-6">
                <stat.icon size={22} className="text-ka-primary mb-3" />
                <p className="text-2xl font-bold text-ka-dark mb-1">{stat.value}</p>
                <p className="text-sm text-ka-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-ka-border overflow-hidden">
            <div className="px-6 py-4 border-b border-ka-border">
              <h2 className="font-semibold text-ka-dark">Cours récents à modérer</h2>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ka-medium border-b border-ka-border">
                  <th className="px-6 py-3 font-medium">Cours</th>
                  <th className="px-6 py-3 font-medium">Enseignant</th>
                  <th className="px-6 py-3 font-medium">Catégorie</th>
                  <th className="px-6 py-3 font-medium">Statut</th>
                </tr>
              </thead>
              <tbody>
                {courses.slice(0, 6).map((course) => (
                  <tr key={course.id} className="border-b border-ka-border last:border-0">
                    <td className="px-6 py-3 text-ka-dark font-medium">{course.title}</td>
                    <td className="px-6 py-3 text-ka-medium">{course.instructor}</td>
                    <td className="px-6 py-3 text-ka-medium">{course.category}</td>
                    <td className="px-6 py-3">
                      <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-ka-primary-light text-ka-primary">
                        Publié
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
