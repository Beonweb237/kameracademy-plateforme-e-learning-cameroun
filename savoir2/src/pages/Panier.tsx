import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Tag, ShoppingCart } from 'lucide-react'
import { courses } from '@/data/mockData'

export default function Panier() {
  const [items, setItems] = useState(courses.slice(0, 3))
  const [promoCode, setPromoCode] = useState('')

  const formatPrice = (price: number) => price.toLocaleString('fr-FR') + ' FCFA'

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((c) => c.id !== id))
  }

  const total = items.reduce((sum, c) => sum + c.price, 0)
  const originalTotal = items.reduce((sum, c) => sum + c.originalPrice, 0)

  return (
    <div className="pt-[72px] min-h-[100dvh] bg-ka-background">
      <section className="py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-[40px] font-bold text-ka-dark leading-[1.15] tracking-[-0.02em] mb-10">
            Mon panier
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-ka-border">
              <ShoppingCart size={48} className="text-ka-light mx-auto mb-4" />
              <p className="text-ka-medium mb-6">Votre panier est vide.</p>
              <Link
                to="/catalogue"
                className="inline-flex h-12 px-6 items-center bg-ka-primary text-white font-semibold rounded-xl hover:bg-ka-primary-dark transition-colors duration-200"
              >
                Explorer le catalogue
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-4">
                {items.map((course) => (
                  <div key={course.id} className="flex gap-4 bg-white rounded-xl border border-ka-border p-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-32 aspect-video object-cover rounded-lg shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-ka-dark mb-1 truncate">{course.title}</h3>
                      <p className="text-sm text-ka-light mb-2">{course.instructor}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-ka-primary">{formatPrice(course.price)}</span>
                        <span className="text-sm text-ka-light line-through">{formatPrice(course.originalPrice)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(course.id)}
                      aria-label="Retirer du panier"
                      className="text-ka-light hover:text-red-500 transition-colors duration-200 self-start"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-white rounded-2xl border border-ka-border p-6 h-fit">
                <h2 className="text-lg font-semibold text-ka-dark mb-4">Récapitulatif</h2>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 flex items-center bg-ka-background rounded-lg overflow-hidden">
                    <Tag size={16} className="text-ka-light ml-3 shrink-0" />
                    <input
                      type="text"
                      placeholder="Code promo"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 h-10 px-2 text-sm outline-none bg-transparent"
                    />
                  </div>
                  <button className="h-10 px-4 bg-ka-dark text-white text-sm font-semibold rounded-lg hover:bg-black transition-colors duration-200 shrink-0">
                    Appliquer
                  </button>
                </div>
                <div className="space-y-2 mb-4 pb-4 border-b border-ka-border">
                  <div className="flex justify-between text-sm text-ka-medium">
                    <span>Sous-total</span>
                    <span className="line-through">{formatPrice(originalTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-ka-primary font-medium">
                    <span>Réduction</span>
                    <span>-{formatPrice(originalTotal - total)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-semibold text-ka-dark">Total</span>
                  <span className="text-2xl font-bold text-ka-primary">{formatPrice(total)}</span>
                </div>
                <button className="w-full h-12 bg-ka-primary text-white font-semibold rounded-xl hover:bg-ka-primary-dark transition-colors duration-200">
                  Passer à la caisse
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
