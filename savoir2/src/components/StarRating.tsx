import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  reviewCount?: number
  size?: number
}

export default function StarRating({ rating, reviewCount, size = 16 }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.5

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          if (i < fullStars) {
            return (
              <Star
                key={i}
                size={size}
                className="text-[#ed8936] fill-[#ed8936]"
              />
            )
          }
          if (i === fullStars && hasHalf) {
            return (
              <div key={i} className="relative" style={{ width: size, height: size }}>
                <Star size={size} className="text-[#e2e8f0] fill-[#e2e8f0] absolute" />
                <div className="absolute overflow-hidden" style={{ width: size / 2 }}>
                  <Star size={size} className="text-[#ed8936] fill-[#ed8936]" />
                </div>
              </div>
            )
          }
          return (
            <Star
              key={i}
              size={size}
              className="text-[#e2e8f0] fill-[#e2e8f0]"
            />
          )
        })}
      </div>
      <span className="text-sm font-semibold text-ka-dark ml-1">{rating}</span>
      {reviewCount !== undefined && (
        <span className="text-sm text-ka-light">({reviewCount.toLocaleString('fr-FR')} avis)</span>
      )}
    </div>
  )
}
