import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu on nav link click
  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav 
      className={`socials4u-navbar fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-5">
          {/* Logo Section */}
          <a 
            href="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg"
          >
            <span className={`socials4u-logo text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-gray-900'
            }`}>
              SOCIALS 4 YOU
            </span>
          </a>
          
          {/* Mobile Menu Button - Improved accessibility */}
          <button 
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center justify-center p-3 text-gray-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
            aria-controls="navbar-nav" 
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <a 
              href="#services" 
              className="socials4u-nav-link"
              onClick={handleNavClick}
            >
              SERVICES
            </a>
            <a 
              href="#about" 
              className="socials4u-nav-link"
              onClick={handleNavClick}
            >
              ABOUT
            </a>
            <a 
              href="#contact" 
              className="socials4u-nav-link"
              onClick={handleNavClick}
            >
              CONTACT
            </a>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ 
                background: 'linear-gradient(135deg, #D4A49A 0%, #C9958B 100%)',
                boxShadow: '0 4px 12px rgba(212, 164, 154, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #E8C4B8 0%, #D4A49A 100%)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 164, 154, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #D4A49A 0%, #C9958B 100%)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 164, 154, 0.3)';
              }}
              onClick={handleNavClick}
            >
              FREE STRATEGY SESSION
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
          id="navbar-nav"
        >
          <div className="flex flex-col gap-2 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
            <a 
              href="#services" 
              className="socials4u-nav-link block w-full text-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={handleNavClick}
            >
              SERVICES
            </a>
            <a 
              href="#about" 
              className="socials4u-nav-link block w-full text-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={handleNavClick}
            >
              ABOUT
            </a>
            <a 
              href="#contact" 
              className="socials4u-nav-link block w-full text-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={handleNavClick}
            >
              CONTACT
            </a>
            <a 
              href="#contact" 
              className="block w-full text-center px-6 py-3 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 mt-2 focus:outline-none focus:ring-2"
              style={{ 
                background: 'linear-gradient(135deg, #D4A49A 0%, #C9958B 100%)',
                boxShadow: '0 4px 12px rgba(212, 164, 154, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #E8C4B8 0%, #D4A49A 100%)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 164, 154, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #D4A49A 0%, #C9958B 100%)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 164, 154, 0.3)';
              }}
              onClick={handleNavClick}
            >
              FREE STRATEGY SESSION
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
