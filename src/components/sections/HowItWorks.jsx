import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Deep Discovery",
      subtitle: "Foundation",
      gradient: "linear-gradient(135deg, #D4A49A, #C9958B)",
      bgGradient: "linear-gradient(135deg, rgba(212, 164, 154, 0.15), rgba(201, 149, 139, 0.15))",
      color: "#D4A49A",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop",
      description: "Strategic deep-dive to understand your business, ideal client, and unique value. We get crystal clear on what makes you different.",
      features: [
        "Business Goals Audit",
        "Ideal Client Mapping",
        "Brand Voice Analysis"
      ]
    },
    {
      number: 2,
      title: "Strategic Blueprint",
      subtitle: "Planning",
      gradient: "linear-gradient(135deg, #9B6B4F, #8B7355)",
      bgGradient: "linear-gradient(135deg, rgba(155, 107, 79, 0.15), rgba(139, 115, 85, 0.15))",
      color: "#9B6B4F",
      image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=400&h=400&fit=crop",
      description: "Custom content strategy engineered for your business. Every post has a purpose—no more random content.",
      features: [
        "90-Day Content Plan",
        "Content Pillar Design",
        "Growth Framework"
      ]
    },
    {
      number: 3,
      title: "Flawless Execution",
      subtitle: "Implementation",
      gradient: "linear-gradient(135deg, #D4A49A, #E8C4B8)",
      bgGradient: "linear-gradient(135deg, rgba(212, 164, 154, 0.15), rgba(232, 196, 184, 0.15))",
      color: "#D4A49A",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
      description: "Complete done-for-you service. We create, schedule, post, and engage—authentically representing your brand.",
      features: [
        "Content Creation",
        "Daily Posting",
        "Community Management"
      ]
    },
    {
      number: 4,
      title: "Proven Results",
      subtitle: "Optimization",
      gradient: "linear-gradient(135deg, #3A4F41, #2C3A31)",
      bgGradient: "linear-gradient(135deg, rgba(58, 79, 65, 0.15), rgba(44, 58, 49, 0.15))",
      color: "#3A4F41",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
      description: "Track real business outcomes. Clear reports on leads, sales, and ROI—not vanity metrics. Then we optimize and scale.",
      features: [
        "Monthly Reporting",
        "ROI Analysis",
        "Strategy Refinement"
      ]
    }
  ];

  const stats = [
    { number: "0", label: "Mental Load" },
    { number: "100%", label: "Done For You" },
    { number: "24/7", label: "Peace of Mind" },
    { number: "∞", label: "Time Saved" }
  ];

  return (
    <section 
      className="relative py-20 lg:py-24 overflow-hidden" 
      style={{ background: '#FFFBF7' }}
      id="how-it-works"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        /* Mobile Carousel Styles */
        .mobile-steps-carousel {
          display: block;
        }
        
        .desktop-steps-grid {
          display: none;
        }
        
        @media (min-width: 768px) {
          .mobile-steps-carousel {
            display: none;
          }
          
          .desktop-steps-grid {
            display: grid;
          }
        }
        
        /* Swiper Pagination for Steps */
        .steps-swiper .swiper-pagination {
          position: relative;
          margin-top: 24px;
        }
        
        .steps-swiper .swiper-pagination-bullet {
          background: #D4A49A;
          opacity: 0.3;
          width: 12px;
          height: 12px;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        
        .steps-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #D4A49A;
          transform: scale(1.3);
        }
        
        .steps-swiper .swiper-slide {
          height: auto;
          padding: 0 8px 40px 8px;
        }
        
        /* Decorative Elements */
        .deco-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
        }

        .deco-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #D4A49A, #E8C4B8);
          top: 10%;
          left: -5%;
        }

        .deco-2 {
          width: 450px;
          height: 450px;
          background: linear-gradient(135deg, #3A4F41, #2C3A31);
          bottom: 10%;
          right: -5%;
        }

        /* Service Circle V3 */
        .service-circle-v3 {
          perspective: 1000px;
          margin-bottom: 30px;
        }

        .circle-outer-v3 {
          width: 280px;
          height: 280px;
          margin: 0 auto;
          border-radius: 50%;
          padding: 8px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .circle-middle-v3 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: white;
          padding: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .circle-inner-v3 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .circle-bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          filter: grayscale(100%);
        }

        .service-circle-v3:hover .circle-outer-v3 {
          transform: scale(1.05);
        }

        .service-circle-v3:hover .circle-middle-v3 {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .service-circle-v3:hover .circle-bg-image {
          opacity: 0.25;
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        /* Step Number in Circle */
        .step-number-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

          .step-title-circle {
          font-size: 20px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 8px;
          position: relative;
          z-index: 2;
          color: #2C2820;
          font-family: 'Lora', serif;
        }

        .step-subtitle {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 2;
        }

        /* Description Box */
        .step-description-box {
          background: white;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 200px;
        }

        .step-description-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.12);
        }

        /* Feature List */
        .feature-list {
          list-style: none;
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: start;
          gap: 12px;
          padding: 12px;
          background: linear-gradient(135deg, rgba(212, 164, 154, 0.03), rgba(232, 196, 184, 0.03));
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: linear-gradient(135deg, rgba(212, 164, 154, 0.08), rgba(232, 196, 184, 0.08));
          transform: translateX(5px);
        }

        .feature-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* CTA Button */
        .cta-button {
          display: inline-block;
          padding: 18px 40px;
          background: linear-gradient(135deg, #D4A49A 0%, #C9958B 100%);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          box-shadow: 0 10px 30px rgba(212, 164, 154, 0.3);
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: linear-gradient(135deg, #E8C4B8 0%, #D4A49A 100%);
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(212, 164, 154, 0.4);
        }

        .cta-button:focus {
          outline: none;
          ring: 2px;
          ring-color: rgba(212, 164, 154, 0.5);
          ring-offset: 2px;
        }

        .cta-button-secondary {
          background: linear-gradient(135deg, #3A4F41 0%, #2C3A31 100%);
          box-shadow: 0 10px 30px rgba(58, 79, 65, 0.3);
        }

        .cta-button-secondary:hover {
          background: linear-gradient(135deg, #2C3A31 0%, #3A4F41 100%);
          box-shadow: 0 15px 40px rgba(58, 79, 65, 0.4);
        }

        /* Stat Badge */
        .stat-badge-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 16px;
          margin-top: 40px;
          padding: 32px;
          background: linear-gradient(135deg, rgba(58, 79, 65, 0.05), rgba(44, 58, 49, 0.05));
          border-radius: 20px;
          border: 2px solid rgba(58, 79, 65, 0.2);
        }

        .stat-item {
          text-align: center;
          padding: 16px;
        }

        .stat-number {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, #3A4F41, #2C3A31);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 13px;
          font-weight: 600;
          color: #5C5347;
          font-family: 'Inter', sans-serif;
        }

        /* Final CTA Card */
        .final-cta-card {
          background: white;
          border-radius: 32px;
          padding: 60px 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          margin-top: 60px;
          text-align: center;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Brush connectors */
        .brush-connector {
          position: absolute;
          height: 3px;
          width: 200px;
          background: linear-gradient(90deg, transparent 0%, #D4A49A 50%, transparent 100%);
          top: 50%;
          opacity: 0.3;
          z-index: 0;
        }

        .brush-left {
          left: 0;
          transform: translateY(-50%);
        }

        .brush-right {
          right: 0;
          transform: translateY(-50%);
        }

        @media (max-width: 768px) {
          .service-circle-v3 {
            margin-bottom: 24px;
          }

          .circle-outer-v3 {
            width: 240px;
            height: 240px;
          }

          .step-description-box {
            padding: 20px;
            min-height: auto;
          }

          .final-cta-card {
            padding: 40px 24px;
          }
        }
      `}</style>

      {/* Decorative Elements */}
      <div className="deco-element deco-1" aria-hidden="true"></div>
      <div className="deco-element deco-2" aria-hidden="true"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header - Consistent spacing */}
          <header className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight" style={{ color: '#2C2820', fontFamily: 'Lora, serif' }}>
              S4Y Blueprint for Success
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#2C2820', fontFamily: 'Lora, serif' }}>
              How We Transform Your Social Media
            </p>
            <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#5C5347', fontFamily: 'Inter, sans-serif' }}>
              Our systematic 4-phase approach takes you from chaos to clarity, delivering consistent results while you focus on running your business.
            </p>
          </header>

          {/* Steps Grid - Improved responsive layout */}
          <div className="relative">
            {/* Mobile Carousel - Only visible on mobile */}
            <div className="mobile-steps-carousel mb-16">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: false
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                className="steps-swiper"
                loop={true}
              >
                {steps.map((step) => (
                  <SwiperSlide key={step.number}>
                    <article className="flex flex-col">
                      <div className="service-circle-v3">
                        <div className="circle-outer-v3" style={{ background: step.bgGradient }}>
                          <div className="circle-middle-v3">
                            <div className="circle-inner-v3">
                              <div 
                                className="circle-bg-image"
                                style={{ backgroundImage: `url('${step.image}')` }}
                                aria-hidden="true"
                              ></div>
                              <div className="step-number-circle" style={{ background: step.gradient }}>
                                {step.number}
                              </div>
                              <h3 className="step-title-circle">{step.title}</h3>
                              <p className="step-subtitle" style={{ color: step.color }}>{step.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="step-description-box">
                        <p className="text-sm sm:text-base mb-4 leading-relaxed" style={{ color: '#5C5347', fontFamily: 'Inter, sans-serif' }}>
                          <strong>{step.description.split('.')[0]}.</strong> {step.description.split('.').slice(1).join('.')}
                        </p>
                        <ul className="feature-list">
                          {step.features.map((feature, idx) => (
                            <li key={idx} className="feature-item">
                              <svg className="feature-icon" style={{ stroke: step.color }} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-xs sm:text-sm" style={{ color: '#5C5347', fontFamily: 'Inter, sans-serif' }}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Grid - Only visible on tablet and up */}
            <div className="desktop-steps-grid">
              {/* Brush stroke connectors */}
              <div className="brush-connector brush-left hidden lg:block" aria-hidden="true"></div>
              <div className="brush-connector brush-right hidden lg:block" aria-hidden="true"></div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start relative z-10 mb-16">
                {steps.map((step) => (
                  <article key={step.number} className="flex flex-col">
                    <div className="service-circle-v3">
                      <div className="circle-outer-v3" style={{ background: step.bgGradient }}>
                        <div className="circle-middle-v3">
                          <div className="circle-inner-v3">
                            <div 
                              className="circle-bg-image"
                              style={{ backgroundImage: `url('${step.image}')` }}
                              aria-hidden="true"
                            ></div>
                            <div className="step-number-circle" style={{ background: step.gradient }}>
                              {step.number}
                            </div>
                            <h3 className="step-title-circle">{step.title}</h3>
                            <p className="step-subtitle" style={{ color: step.color }}>{step.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="step-description-box">
                      <p className="text-sm sm:text-base mb-4 leading-relaxed" style={{ color: '#5C5347', fontFamily: 'Inter, sans-serif' }}>
                        <strong>{step.description.split('.')[0]}.</strong> {step.description.split('.').slice(1).join('.')}
                      </p>
                      <ul className="feature-list">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="feature-item">
                            <svg className="feature-icon" style={{ stroke: step.color }} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs sm:text-sm" style={{ color: '#5C5347', fontFamily: 'Inter, sans-serif' }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Results Stats - Improved spacing */}
          <div className="stat-badge-row" role="complementary" aria-label="Key metrics">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Final CTA - Consistent spacing */}
          <div className="final-cta-card">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-6" style={{ color: '#2C2820', fontFamily: 'Lora, serif' }}>
              Experience the S4Y Difference
            </h3>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#5C5347', fontFamily: 'Inter, sans-serif' }}>
              Stop managing your social media manager. Get a strategic partner who takes the lead, delivers measurable results, and gives you back your time—without the mental load.
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
                className="cta-button cta-button-secondary w-full sm:w-auto text-center"
                aria-label="Explore our services"
              >
                Explore Our Services
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

