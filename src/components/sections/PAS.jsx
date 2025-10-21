import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const PAS = () => {
  // Agitate cards data for carousel
  const agitateCards = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
      alt: "Chasing Metrics",
      title: "Ghost Metrics",
      description: "Vanity numbers don't pay bills"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
      alt: "Content Paralysis",
      title: "Perfectionism",
      description: "Leading to inconsistency"
    },
    {
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
      alt: "Content Creation Stress",
      title: "Content Chaos",
      description: "No strategy, just busywork"
    },
    {
      image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=400&h=400&fit=crop",
      alt: "Time Drain",
      title: "Time Hemorrhage",
      description: "Your most valuable asset"
    }
  ];

  const AgitateCard = ({ image, alt, title, description }) => (
    <div className="text-center">
      <div className="image-container mx-auto" style={{ height: '200px', maxWidth: '200px', padding: '12px' }}>
        <img 
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="body-text font-semibold mt-4 mb-2">{title}</h4>
      <p className="body-text text-sm">{description}</p>
    </div>
  );

  return (
    <section className="pas-section" id="pas">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        /* Mobile Carousel Styles for Agitate Cards */
        .mobile-agitate-carousel {
          display: block;
        }
        
        .desktop-agitate-grid {
          display: none;
        }
        
        @media (min-width: 768px) {
          .mobile-agitate-carousel {
            display: none;
          }
          
          .desktop-agitate-grid {
            display: grid;
          }
        }
        
        /* Swiper customization */
        .pas-swiper .swiper-slide {
          height: auto;
          padding: 0 8px;
        }
      `}</style>
      
      {/* Decorative Brush Elements */}
      <div className="brush-element brush-top" aria-hidden="true"></div>
      <div className="brush-element brush-middle" aria-hidden="true"></div>
      <div className="brush-element brush-bottom" aria-hidden="true"></div>

      <div className="content-wrapper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          
          {/* Hero Header - Consistent spacing */}
          <header className="text-center mb-20 lg:mb-24">
            <h1 className="heading text-4xl sm:text-5xl lg:text-7xl mb-6 lg:mb-8">
              From Chaos to Clarity
            </h1>
            <p className="subheading text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8">
              Your Social Media Transformation Starts Here
            </p>
          </header>

          {/* Problem Section - Improved responsive layout */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-24 lg:mb-32">
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="image-container" style={{ maxHeight: '480px', width: '100%', maxWidth: '500px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=700&fit=crop" 
                  alt="Social Media Frustration"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <article className="lg:col-span-3">
              <div className="stagger-card problem-stagger">
                <div 
                  className="feature-icon mx-auto" 
                  style={{ background: 'linear-gradient(135deg, #D4A49A, #C9958B)' }}
                  aria-hidden="true"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <h2 className="heading text-2xl sm:text-3xl mb-6 text-center">
                  Does Your Social Media Look Busy, But Feel Broken?
                </h2>
                <p className="body-text text-base sm:text-lg mb-6 leading-relaxed">
                  If your social media marketing isn't generating revenue or clients, <strong>it is broken</strong>. You are likely trapped in a cycle of creating content that "looks busy but doesn't actually bring in any clients," exhausting time and resources on activity that fails to translate into tangible sales.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-10">
                  <div className="stat-badge">
                    <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#9E2410' }}>
                      0.05%
                    </div>
                    <p className="body-text text-xs sm:text-sm font-semibold">Organic Reach</p>
                  </div>
                  <div className="stat-badge">
                    <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#9E2410' }}>
                      0
                    </div>
                    <p className="body-text text-xs sm:text-sm font-semibold">New Clients</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Agitate Section - Improved spacing */}
          <article className="mb-24 lg:mb-32">
            <div className="stagger-card agitate-stagger max-w-6xl mx-auto">
              <div 
                className="feature-icon mx-auto" 
                style={{ background: 'linear-gradient(135deg, #9B6B4F, #8B7355)' }}
                aria-hidden="true"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h2 className="heading text-2xl sm:text-3xl mb-6 lg:mb-8 text-center">
                Are You Exhausted from "Throwing Spaghetti at the Wall"?
              </h2>
              <p className="body-text text-lg sm:text-xl mb-8 lg:mb-10 text-center max-w-4xl mx-auto leading-relaxed">
                This constant "busywork" is frustrating. You're creating content just for the sake of it, only to watch it disappear as organic reach plummets to as low as <strong>0.05%</strong>.
              </p>

              {/* Mobile Carousel - Only visible on mobile */}
              <div className="mobile-agitate-carousel mb-8">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }}
                  className="pas-swiper"
                  loop={true}
                >
                  {agitateCards.map((card, index) => (
                    <SwiperSlide key={index}>
                      <AgitateCard 
                        image={card.image}
                        alt={card.alt}
                        title={card.title}
                        description={card.description}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Desktop Grid - Only visible on tablet and up */}
              <div className="desktop-agitate-grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {agitateCards.map((card, index) => (
                  <AgitateCard 
                    key={index}
                    image={card.image}
                    alt={card.alt}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>

              <div className="mt-10 lg:mt-12 p-6 sm:p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border-2 border-red-200">
                <p className="body-text text-xl sm:text-2xl font-bold text-center" style={{ color: '#9E2410' }}>
                  This chaotic approach costs you your most valuable asset—<em>time</em>—and brings zero clients in the door.
                </p>
              </div>
            </div>
          </article>

          {/* Solution Section - Improved responsive layout */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
            <article className="lg:col-span-3 order-2 lg:order-1">
              <div className="stagger-card solution-stagger">
                <div 
                  className="feature-icon mx-auto" 
                  style={{ background: 'linear-gradient(135deg, #3A4F41, #2C3A31)' }}
                  aria-hidden="true"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h2 className="heading text-2xl sm:text-3xl mb-6 text-center">
                  How Do You Turn That "Busywork" into a Client Engine?
                </h2>
                <p className="body-text text-base sm:text-lg mb-6 leading-relaxed">
                  You move from chaos to clarity with a <strong>proven strategic framework</strong>. We first establish your foundation by getting crystal clear on your single best offer, your ideal client, and the message that truly connects with them.
                </p>
                <p className="body-text text-base sm:text-lg mb-8 leading-relaxed">
                  From there, we build a powerful <strong>content engine</strong> designed to deliver consistent value, build unshakable trust, and forge the genuine relationships that predictably turn your audience into high-value clients.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div 
                    className="stat-badge" 
                    style={{ background: 'linear-gradient(135deg, rgba(58, 79, 65, 0.1), rgba(44, 58, 49, 0.1))' }}
                  >
                    <svg 
                      className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" 
                      style={{ stroke: '#3A4F41' }} 
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                    <p className="body-text text-xs sm:text-sm font-semibold">Clear Strategy</p>
                  </div>
                  <div 
                    className="stat-badge" 
                    style={{ background: 'linear-gradient(135deg, rgba(58, 79, 65, 0.1), rgba(44, 58, 49, 0.1))' }}
                  >
                    <svg 
                      className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" 
                      style={{ stroke: '#3A4F41' }} 
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    <p className="body-text text-xs sm:text-sm font-semibold">Content Engine</p>
                  </div>
                  <div 
                    className="stat-badge" 
                    style={{ background: 'linear-gradient(135deg, rgba(58, 79, 65, 0.1), rgba(44, 58, 49, 0.1))' }}
                  >
                    <svg 
                      className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" 
                      style={{ stroke: '#3A4F41' }} 
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                    <p className="body-text text-xs sm:text-sm font-semibold">Real Results</p>
                  </div>
                </div>
              </div>
            </article>

            <div className="lg:col-span-2 order-1 lg:order-2 flex items-center justify-center">
              <div className="image-container" style={{ maxHeight: '480px', width: '100%', maxWidth: '500px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop" 
                  alt="Strategic Success"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Final CTA - Consistent spacing */}
          <div className="text-center">
            <div className="stagger-card max-w-4xl mx-auto cta-final-card">
              <h2 className="heading text-3xl sm:text-4xl mb-6">
                Transform Your Social Media Today
              </h2>
              <p className="body-text text-lg sm:text-xl mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
                Stop managing your manager. Experience the S4Y difference with a strategic partner who delivers total relief, measurable results, and gives you back your time—without the mental load.
              </p>
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
                  style={{ background: 'linear-gradient(135deg, #3A4F41 0%, #2C3A31 100%)' }}
                  aria-label="View our blueprint"
                >
                  See the S4Y Blueprint
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PAS


