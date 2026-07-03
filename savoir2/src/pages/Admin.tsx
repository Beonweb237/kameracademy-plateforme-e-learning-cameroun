import { Users, BookOpen, DollarSign, TrendingUp } from 'lucide-react'
import { courses, instructors } from '@/data/mockData'

const stats = [
  { icon: BookOpen, label: 'Cours publiés', value: courses.length },
  { icon: Users, label: 'Enseignants actifs', value: instructors.length },
  { icon: TrendingUp, label: 'Apprenants inscrits', value: '10 240' },
  { icon: DollarSign, label: 'Revenus du mois', value: '2 450 000 FCFA' },
]

const monthlyGrowth = [
  { month: 'Jan', users: 4200 },
  { month: 'Fév', users: 5100 },
  { month: 'Mar', users: 6300 },
  { month: 'Avr', users: 7200 },
  { month: 'Mai', users: 8600 },
  { month: 'Juin', users: 10240 },
]

const recentUsers = [
  { name: 'Alice Fongang', email: 'alice.f@example.cm', joined: '28 juin 2026', courses: 2 },
  { name: 'Bertrand Kono', email: 'bertrand.k@example.cm', joined: '27 juin 2026', courses: 1 },
  { name: 'Cynthia Mbog', email: 'cynthia.m@example.cm', joined: '26 juin 2026', courses: 3 },
  { name: 'Daniel Essomba', email: 'daniel.e@example.cm', joined: '25 juin 2026', courses: 1 },
  { name: 'Estelle Nguema', email: 'estelle.n@example.cm', joined: '24 juin 2026', courses: 4 },
]

export default function Admin() {
  const maxUsers = Math.max(...monthlyGrowth.map((m) => m.users))

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

          {/* Growth chart */}
          <div className="bg-white rounded-xl border border-ka-border p-6 mb-8">
            <h2 className="font-semibold text-ka-dark mb-6">Croissance des apprenants</h2>
            <div className="flex items-end justify-between gap-3 h-40">
              {monthlyGrowth.map((m) => (
                <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end justify-center h-32">
                    <div
                      className="w-full max-w-[48px] bg-ka-primary rounded-t-md"
                      style={{ height: `${(m.users / maxUsers) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-ka-medium">{m.month}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent users */}
          <div className="bg-white rounded-xl border border-ka-border overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-ka-border">
              <h2 className="font-semibold text-ka-dark">Nouveaux utilisateurs</h2>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ka-medium border-b border-ka-border">
                  <th className="px-6 py-3 font-medium">Nom</th>
                  <th className="px-6 py-3 font-medium">Email</th>
                  <th className="px-6 py-3 font-medium">Inscrit le</th>
                  <th className="px-6 py-3 font-medium">Cours suivis</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr key={user.email} className="border-b border-ka-border last:border-0">
                    <td className="px-6 py-3 text-ka-dark font-medium">{user.name}</td>
                    <td className="px-6 py-3 text-ka-medium">{user.email}</td>
                    <td className="px-6 py-3 text-ka-medium">{user.joined}</td>
                    <td className="px-6 py-3 text-ka-medium">{user.courses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Moderation */}
          <div className="bg-white rounded-xl border border-ka-border overflow-hidden">
            <div className="px-6 py-4 border-b border-ka-border flex items-center justify-between">
              <h2 className="font-semibold text-ka-dark">Cours récents à modérer</h2>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-ka-accent/10 text-ka-accent">
                {courses.length} au total
              </span>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ka-medium border-b border-ka-border">
                  <th className="px-6 py-3 font-medium">Cours</th>
                  <th className="px-6 py-3 font-medium">Enseignant</th>
                  <th className="px-6 py-3 font-medium">Catégorie</th>
                  <th className="px-6 py-3 font-medium">Note</th>
                  <th className="px-6 py-3 font-medium">Statut</th>
                  <th className="px-6 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.slice(0, 6).map((course) => (
                  <tr key={course.id} className="border-b border-ka-border last:border-0">
                    <td className="px-6 py-3 text-ka-dark font-medium">{course.title}</td>
                    <td className="px-6 py-3 text-ka-medium">{course.instructor}</td>
                    <td className="px-6 py-3 text-ka-medium">{course.category}</td>
                    <td className="px-6 py-3 text-ka-medium">{course.rating}</td>
                    <td className="px-6 py-3">
                      <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-ka-primary-light text-ka-primary">
                        Publié
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <button className="text-xs font-medium text-ka-primary hover:text-ka-primary-dark transition-colors duration-200">
                        Voir détails
                      </button>
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
