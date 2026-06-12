export interface Course {
  id: number
  title: string
  instructor: string
  instructorAvatar: string
  image: string
  rating: number
  reviewCount: number
  price: number
  originalPrice: number
  discount: string
  category: string
  description: string
}

export interface Instructor {
  id: number
  name: string
  title: string
  avatar: string
  courses: number
  students: number
  rating: number
  bio: string
}

export interface Category {
  id: number
  name: string
  image: string
  courseCount: number
  gradient: string
}

export interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  avatar: string
  rating: number
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'Développement Web Full-Stack',
    instructor: 'Jean-Paul Mbarga',
    instructorAvatar: '/instructor-1.jpg',
    image: '/course-dev-web.jpg',
    rating: 4.8,
    reviewCount: 1240,
    price: 19900,
    originalPrice: 49900,
    discount: '-60%',
    category: 'Développement',
    description: 'Devenez un développeur web complet en maîtrisant HTML, CSS, JavaScript, React et Node.js.',
  },
  {
    id: 2,
    title: 'Marketing Digital Avancé',
    instructor: 'Aminata Fouda',
    instructorAvatar: '/instructor-2.jpg',
    image: '/course-marketing.jpg',
    rating: 4.7,
    reviewCount: 890,
    price: 14900,
    originalPrice: 39900,
    discount: '-63%',
    category: 'Marketing',
    description: 'Maîtrisez les stratégies de marketing digital pour le marché africain.',
  },
  {
    id: 3,
    title: 'Entrepreneuriat & Business au Cameroun',
    instructor: 'Dr. Samuel Etoga',
    instructorAvatar: '/instructor-3.jpg',
    image: '/course-entrepreneuriat.jpg',
    rating: 4.9,
    reviewCount: 2100,
    price: 24900,
    originalPrice: 59900,
    discount: '-58%',
    category: 'Business',
    description: 'Lancez votre entreprise au Cameroun avec les bonnes stratégies et outils.',
  },
  {
    id: 4,
    title: 'UI/UX Design Masterclass',
    instructor: 'Grace Nkeng',
    instructorAvatar: '/instructor-4.jpg',
    image: '/course-design.jpg',
    rating: 4.6,
    reviewCount: 650,
    price: 17900,
    originalPrice: 44900,
    discount: '-60%',
    category: 'Design',
    description: 'Créez des interfaces utilisateur magnifiques et intuitives.',
  },
  {
    id: 5,
    title: 'Analyse de Données avec Python',
    instructor: 'François Tchamba',
    instructorAvatar: '/instructor-3.jpg',
    image: '/course-data.jpg',
    rating: 4.8,
    reviewCount: 980,
    price: 22900,
    originalPrice: 54900,
    discount: '-58%',
    category: 'Data Science',
    description: 'Apprenez à analyser des données avec Python, Pandas et Matplotlib.',
  },
  {
    id: 6,
    title: 'Anglais des Affaires',
    instructor: 'Sarah Ndam',
    instructorAvatar: '/instructor-2.jpg',
    image: '/course-langues.jpg',
    rating: 4.5,
    reviewCount: 430,
    price: 9900,
    originalPrice: 29900,
    discount: '-67%',
    category: 'Langues',
    description: 'Perfectionnez votre anglais professionnel pour le monde des affaires.',
  },
  {
    id: 7,
    title: 'Finance & Gestion de Trésorerie',
    instructor: 'Patrick Abena',
    instructorAvatar: '/instructor-1.jpg',
    image: '/course-finance.jpg',
    rating: 4.7,
    reviewCount: 720,
    price: 18900,
    originalPrice: 45900,
    discount: '-59%',
    category: 'Finance',
    description: 'Maîtrisez la gestion financière de votre entreprise.',
  },
  {
    id: 8,
    title: 'Développement Mobile React Native',
    instructor: 'Kevin Esso',
    instructorAvatar: '/instructor-3.jpg',
    image: '/course-dev-web.jpg',
    rating: 4.6,
    reviewCount: 540,
    price: 21900,
    originalPrice: 52900,
    discount: '-59%',
    category: 'Développement',
    description: 'Créez des applications mobiles iOS et Android avec React Native.',
  },
  {
    id: 9,
    title: 'Photographie Professionnelle',
    instructor: 'Grace Nkeng',
    instructorAvatar: '/instructor-4.jpg',
    image: '/course-design.jpg',
    rating: 4.7,
    reviewCount: 320,
    price: 12900,
    originalPrice: 34900,
    discount: '-63%',
    category: 'Design',
    description: 'Maîtrisez l\'art de la photographie professionnelle.',
  },
  {
    id: 10,
    title: 'Comptabilité pour Entrepreneurs',
    instructor: 'Dr. Samuel Etoga',
    instructorAvatar: '/instructor-3.jpg',
    image: '/course-entrepreneuriat.jpg',
    rating: 4.8,
    reviewCount: 890,
    price: 16900,
    originalPrice: 42900,
    discount: '-61%',
    category: 'Business',
    description: 'Apprenez les bases de la comptabilité pour gérer votre business.',
  },
  {
    id: 11,
    title: 'Français Professionnel',
    instructor: 'Sarah Ndam',
    instructorAvatar: '/instructor-2.jpg',
    image: '/course-langues.jpg',
    rating: 4.6,
    reviewCount: 510,
    price: 8900,
    originalPrice: 24900,
    discount: '-64%',
    category: 'Langues',
    description: 'Améliorez votre français professionnel pour la carrière.',
  },
  {
    id: 12,
    title: 'Machine Learning Fondamentaux',
    instructor: 'François Tchamba',
    instructorAvatar: '/instructor-3.jpg',
    image: '/course-data.jpg',
    rating: 4.9,
    reviewCount: 780,
    price: 27900,
    originalPrice: 64900,
    discount: '-57%',
    category: 'Data Science',
    description: 'Introduction au machine learning et à l\'intelligence artificielle.',
  },
]

export const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Jean-Paul Mbarga',
    title: 'Développeur Full-Stack Senior',
    avatar: '/instructor-1.jpg',
    courses: 12,
    students: 8500,
    rating: 4.9,
    bio: 'Expert en développement web et mobile avec 10 ans d\'expérience dans les startups camerounaises.',
  },
  {
    id: 2,
    name: 'Aminata Fouda',
    title: 'Consultante Marketing Digital',
    avatar: '/instructor-2.jpg',
    courses: 8,
    students: 5200,
    rating: 4.8,
    bio: 'Spécialiste en stratégie digitale et growth hacking pour le marché africain.',
  },
  {
    id: 3,
    name: 'Dr. Samuel Etoga',
    title: 'Entrepreneur & Business Coach',
    avatar: '/instructor-3.jpg',
    courses: 15,
    students: 12000,
    rating: 4.9,
    bio: 'Fondateur de 3 entreprises et mentor pour jeunes entrepreneurs camerounais.',
  },
  {
    id: 4,
    name: 'Grace Nkeng',
    title: 'Designer UX/UI',
    avatar: '/instructor-4.jpg',
    courses: 6,
    students: 3800,
    rating: 4.7,
    bio: 'Passionnée par le design centré utilisateur et l\'innovation numérique.',
  },
  {
    id: 5,
    name: 'François Tchamba',
    title: 'Data Scientist Senior',
    avatar: '/instructor-1.jpg',
    courses: 9,
    students: 6200,
    rating: 4.8,
    bio: 'Expert en data science et intelligence artificielle, ancien consultant pour des banques africaines.',
  },
  {
    id: 6,
    name: 'Sarah Ndam',
    title: 'Formatrice en Langues',
    avatar: '/instructor-2.jpg',
    courses: 5,
    students: 4100,
    rating: 4.7,
    bio: 'Polyglotte passionnée, elle enseigne l\'anglais et le français depuis 8 ans.',
  },
  {
    id: 7,
    name: 'Patrick Abena',
    title: 'Expert-Comptable & Financier',
    avatar: '/instructor-1.jpg',
    courses: 7,
    students: 3500,
    rating: 4.6,
    bio: 'Comptable agréé avec une expertise en finance pour PME africaines.',
  },
  {
    id: 8,
    name: 'Kevin Esso',
    title: 'Développeur Mobile',
    avatar: '/instructor-3.jpg',
    courses: 4,
    students: 2800,
    rating: 4.7,
    bio: 'Spécialiste React Native et Flutter, créateur de 3 applications populaires au Cameroun.',
  },
]

export const categories: Category[] = [
  {
    id: 1,
    name: 'Développement',
    image: '/category-dev.jpg',
    courseCount: 42,
    gradient: 'from-[#285e61] to-[#234c4f]',
  },
  {
    id: 2,
    name: 'Business',
    image: '/category-business.jpg',
    courseCount: 38,
    gradient: 'from-[#ed8936] to-[#f6ad55]',
  },
  {
    id: 3,
    name: 'Design',
    image: '/category-design.jpg',
    courseCount: 25,
    gradient: 'from-[#6b46c1] to-[#9f7aea]',
  },
  {
    id: 4,
    name: 'Marketing',
    image: '/category-marketing.jpg',
    courseCount: 31,
    gradient: 'from-[#dd6b20] to-[#ed8936]',
  },
  {
    id: 5,
    name: 'Langues',
    image: '/category-langues.jpg',
    courseCount: 19,
    gradient: 'from-[#38a169] to-[#68d391]',
  },
  {
    id: 6,
    name: 'Data Science',
    image: '/category-data.jpg',
    courseCount: 22,
    gradient: 'from-[#3182ce] to-[#63b3ed]',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Kimi Academy a transformé ma carrière. J\'ai suivi le cours de développement web et j\'ai trouvé un emploi en 3 mois. Les enseignants sont top et les prix sont vraiment accessibles.',
    author: 'Marc Tchinda',
    role: 'Développeur Web Junior',
    avatar: '/testimonial-student-1.jpg',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Je vends mes formations sur Kimi Academy depuis 6 mois et j\'ai déjà gagné plus de 500 000 FCFA. La plateforme est intuitive et l\'équipe est très supportive.',
    author: 'Fatou Biya',
    role: 'Formatrice en Marketing',
    avatar: '/testimonial-student-2.jpg',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Enfin une plateforme de e-learning adaptée au contexte camerounais ! Les cours sont pertinents, les enseignants comprennent nos réalités. Je recommande à 100%.',
    author: 'Kofi Nguemo',
    role: 'Entrepreneur',
    avatar: '/testimonial-student-3.jpg',
    rating: 5,
  },
]

export const stats = [
  { value: 10000, suffix: '+', label: 'Apprenants actifs' },
  { value: 500, suffix: '+', label: 'Cours disponibles' },
  { value: 50, suffix: '+', label: 'Enseignants experts' },
  { value: 95, suffix: '%', label: 'Taux de satisfaction' },
]

export const filterTabs = ['Tous', 'Développement', 'Business', 'Design', 'Marketing', 'Langues']
