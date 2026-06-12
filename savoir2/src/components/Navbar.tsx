import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap,
  Search,
  ShoppingCart,
  Menu,
  X,
} from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const cartCount = 0

  const navLinks = [
    { label: 'Catégories', href: '/catalogue' },
    { label: 'Enseignants', href: '/enseignants' },
    { label: 'Devenir Instructeur', href: '/enseignants' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-[12px] border-b border-ka-border shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <GraduationCap size={32} className="text-ka-primary" />
            <span className={`text-xl font-bold ${scrolled ? 'text-ka-primary' : 'text-ka-primary'}`}>
              Kimi Academy
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-[16px] font-medium text-ka-medium hover:text-ka-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-ka-light" />
              <input
                type="text"
                placeholder="Rechercher un cours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[320px] h-10 pl-10 pr-4 rounded-full bg-ka-background border border-transparent focus:border-ka-primary focus:outline-none text-sm text-ka-dark placeholder:text-ka-light transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/connexion"
              className="h-10 px-4 rounded-lg border border-ka-border text-ka-medium font-medium text-sm hover:bg-ka-background transition-colors duration-200 flex items-center"
            >
              Connexion
            </Link>
            <Link
              to="/inscription"
              className="h-10 px-4 rounded-lg bg-ka-primary text-white font-semibold text-sm hover:bg-ka-primary-dark transition-colors duration-200 flex items-center"
            >
              Inscription
            </Link>
            <Link to="/panier" className="relative p-2 text-ka-primary hover:bg-ka-background rounded-lg transition-colors duration-200">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-ka-dark hover:bg-ka-background rounded-lg transition-colors duration-200"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-[100] bg-white pt-[72px]"
          >
            <div className="p-6 flex flex-col gap-6">
              {/* Mobile Search */}
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-ka-light" />
                <input
                  type="text"
                  placeholder="Rechercher un cours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-10 pr-4 rounded-xl bg-ka-background border border-transparent focus:border-ka-primary focus:outline-none text-base text-ka-dark placeholder:text-ka-light"
                />
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="text-lg font-medium text-ka-dark hover:text-ka-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Auth */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-ka-border">
                <Link
                  to="/connexion"
                  className="h-12 w-full rounded-lg border border-ka-border text-ka-medium font-medium flex items-center justify-center hover:bg-ka-background transition-colors duration-200"
                >
                  Connexion
                </Link>
                <Link
                  to="/inscription"
                  className="h-12 w-full rounded-lg bg-ka-primary text-white font-semibold flex items-center justify-center hover:bg-ka-primary-dark transition-colors duration-200"
                >
                  Inscription
                </Link>
                <Link
                  to="/panier"
                  className="h-12 w-full rounded-lg border border-ka-border text-ka-medium font-medium flex items-center justify-center gap-2 hover:bg-ka-background transition-colors duration-200"
                >
                  <ShoppingCart size={20} />
                  Panier {cartCount > 0 && `(${cartCount})`}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
