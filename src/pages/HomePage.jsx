import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import PAS from '../components/sections/PAS'
import HowItWorks from '../components/sections/HowItWorks'
import FAQ from '../components/sections/FAQ'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Skip to main content - Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        Skip to main content
      </a>
      
      <Navbar />
      
      {/* Main content wrapper with consistent spacing */}
      <main id="main-content" className="w-full">
        <Hero />
        <Services />
        <PAS />
        <HowItWorks />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default HomePage

