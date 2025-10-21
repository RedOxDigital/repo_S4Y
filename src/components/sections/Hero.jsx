import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Hero = () => {
  // Service cards data for easier management
  const serviceCards = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      title: "S4Y - No More Instructions",
      description: "We lead the strategy and deliver content plans for approval. No more \"What do you want to post?\" questions. We're experts who take the lead—your mental load is zero."
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      title: "S4Y - No More Wasted Money",
      description: "Every action is linked to a business goal (more leads/sales). We report on outcomes, not vanity metrics. You get measurable, business-aligned value."
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      title: "S4Y - No More Vague Reports",
      description: "Simple, clear reports connecting social metrics to business outcomes. No jargon, no vanity metrics. We report on results, not activity."
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "S4Y - No More Generic Posts",
      description: "Our deep onboarding ensures content is authentic—it looks and sounds like you wrote it. Your brand integrity is protected."
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "S4Y - No More Inconsistency",
      description: "Posts are always on time, engagement is handled promptly. Your social media is finally handled—peace of mind guaranteed. Content Transformation: We turn your existing blog content into a consistent stream of high-performing social posts."
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
        </svg>
      ),
      title: "S4Y - Stop Thinking About Content",
      description: "Join business owners who've stopped managing their managers. Get a partner who delivers strategy, handles execution, and drives measurable results—without adding to your mental load. We sell peace of mind, measurable results, and time."
    }
  ];

  const ServiceCard = ({ icon, title, description }) => (
    <div className="service-card" role="article">
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #D4A49A 0%, #C9958B 100%)' }}
          aria-hidden="true"
        >
          {icon}
        </div>
        <h3 className="service-title text-base sm:text-lg">{title}</h3>
      </div>
      <p className="body-text text-sm sm:text-base">
        {description}
      </p>
    </div>
  );

  return (
    <section className="socials4u-hero-section" id="hero">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        /* Mobile Carousel Styles */
        .mobile-carousel {
          display: block;
        }
        
        .desktop-grid {
          display: none;
        }
        
        @media (min-width: 1024px) {
          .mobile-carousel {
            display: none;
          }
          
          .desktop-grid {
            display: grid;
          }
        }
        
        /* Swiper customization */
        .hero-swiper .swiper-slide {
          height: auto;
          padding: 0 4px;
        }
      `}</style>
      
      {/* Decorative Color Blocks */}
      <div className="color-block block-1" aria-hidden="true"></div>
      <div className="color-block block-2" aria-hidden="true"></div>
      <div className="color-block block-3" aria-hidden="true"></div>

      <div className="content-wrapper">
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 pt-32 sm:pt-40">
          {/* Top Section - Consistent spacing */}
          <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-24">
            <h1 className="heading text-4xl sm:text-5xl lg:text-7xl mb-6 lg:mb-8">
              S4Y - DONE FOR YOU.
            </h1>
            <p className="subheading text-xl sm:text-2xl lg:text-4xl mb-6 lg:mb-8">
              Stop Managing Your Social Media Manager
            </p>
            <p className="body-text text-base sm:text-lg lg:text-xl mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
              You didn't hire an expert to take orders—you hired one to take the lead. Experience the S4Y difference with a strategic partner who delivers total relief, measurable results, and gives you back your time—without the mental load.
            </p>
            
            {/* CTA Buttons - Improved hierarchy and spacing */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="cta-button w-full sm:w-auto text-center"
                aria-label="Get started with a free strategy session"
              >
                S4Y - Get Started (Free Strategy Session)
              </a>
              <a 
                href="#services" 
                className="cta-button w-full sm:w-auto text-center" 
                style={{background: 'linear-gradient(135deg, #3A4F41 0%, #2C3A31 100%)'}}
                aria-label="View our blueprint for growth"
              >
                See the S4Y Blueprint for Growth
              </a>
            </div>
          </div>

          {/* Mobile Carousel - Only visible on mobile */}
          <div className="mobile-carousel mb-8">
            {/* Image first on mobile */}
            <div className="mb-8">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=1000&fit=crop" 
                  alt="Callie Cox - Social Media Strategist"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* First Row - Slides Left to Right (Cards 0, 1, 2) */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false
              }}
              className="hero-swiper mb-6"
              loop={true}
              initialSlide={0}
            >
              {serviceCards.slice(0, 3).map((card, index) => (
                <SwiperSlide key={`row1-${index}`}>
                  <ServiceCard 
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Second Row - Slides Right to Left (Cards 3, 4, 5) */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: true
              }}
              className="hero-swiper"
              loop={true}
              initialSlide={1}
            >
              {serviceCards.slice(3, 6).map((card, index) => (
                <SwiperSlide key={`row2-${index}`}>
                  <ServiceCard 
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid Layout - Only visible on desktop */}
          <div className="desktop-grid">
            {/* Image and Services Grid - Improved responsive layout */}
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {/* Left Column - Services */}
              <div className="space-y-6 lg:space-y-8">
                <ServiceCard 
                  icon={serviceCards[0].icon}
                  title={serviceCards[0].title}
                  description={serviceCards[0].description}
                />
                <ServiceCard 
                  icon={serviceCards[1].icon}
                  title={serviceCards[1].title}
                  description={serviceCards[1].description}
                />
              </div>

              {/* Center Column - Image - Improved responsive sizing */}
              <div className="lg:row-span-2">
                <div className="image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=1000&fit=crop" 
                    alt="Callie Cox - Social Media Strategist"
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right Column - Services */}
              <div className="space-y-6 lg:space-y-8">
                <ServiceCard 
                  icon={serviceCards[2].icon}
                  title={serviceCards[2].title}
                  description={serviceCards[2].description}
                />
                <ServiceCard 
                  icon={serviceCards[3].icon}
                  title={serviceCards[3].title}
                  description={serviceCards[3].description}
                />
              </div>
            </div>

            {/* Bottom Services Row - Consistent spacing */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8">
              <ServiceCard 
                icon={serviceCards[4].icon}
                title={serviceCards[4].title}
                description={serviceCards[4].description}
              />
              <ServiceCard 
                icon={serviceCards[5].icon}
                title={serviceCards[5].title}
                description={serviceCards[5].description}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

