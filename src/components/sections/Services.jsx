const Services = () => {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden" style={{ background: '#FFFBF7' }} id="services">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        /* Decorative Elements */
        .services-deco-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
        }

        .services-deco-1 {
          width: 450px;
          height: 450px;
          background: linear-gradient(135deg, #D4A49A, #E8C4B8);
          top: 5%;
          right: -8%;
        }

        .services-deco-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #3A4F41, #2C3A31);
          bottom: 10%;
          left: -5%;
        }

        /* Service Circle V3 - Unified with HowItWorks */
        .service-circle-unified {
          perspective: 1000px;
          margin-bottom: 30px;
        }

        .circle-outer-unified {
          width: 280px;
          height: 280px;
          margin: 0 auto;
          border-radius: 50%;
          padding: 8px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .circle-middle-unified {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: white;
          padding: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .circle-inner-unified {
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

        .circle-bg-image-unified {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          filter: grayscale(100%);
        }

        .service-circle-unified:hover .circle-outer-unified {
          transform: scale(1.05);
        }

        .service-circle-unified:hover .circle-middle-unified {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .service-circle-unified:hover .circle-bg-image-unified {
          opacity: 0.25;
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        .service-icon-unified {
          width: 70px;
          height: 70px;
          position: relative;
          z-index: 2;
          color: white;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .service-title-unified {
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          text-align: center;
          margin-top: 18px;
          position: relative;
          z-index: 2;
          font-family: 'Lora', serif;
          line-height: 1.3;
        }

        .service-subtitle-unified {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.85rem;
          text-align: center;
          margin-top: 10px;
          position: relative;
          z-index: 2;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .service-description-box-unified {
          background: white;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 180px;
        }

        .service-description-box-unified:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.12);
        }

        /* Brush connectors */
        .brush-connector-services {
          position: absolute;
          height: 3px;
          width: 200px;
          background: linear-gradient(90deg, transparent 0%, #D4A49A 50%, transparent 100%);
          top: 50%;
          opacity: 0.3;
          z-index: 0;
        }

        .brush-left-services {
          left: 0;
          transform: translateY(-50%);
        }

        .brush-right-services {
          right: 0;
          transform: translateY(-50%);
        }

        @media (max-width: 768px) {
          .service-circle-unified {
            margin-bottom: 24px;
          }

          .circle-outer-unified {
            width: 240px;
            height: 240px;
          }

          .service-description-box-unified {
            padding: 20px;
            min-height: auto;
          }
        }
      `}</style>

      {/* Decorative Paint Brush Elements */}
      <div className="services-deco-element services-deco-1" aria-hidden="true"></div>
      <div className="services-deco-element services-deco-2" aria-hidden="true"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Consistent spacing */}
          <header className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight" style={{ color: '#2C2820', fontFamily: 'Lora, serif' }}>
              S4Y - Done For You Services
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#2C2820', fontFamily: 'Lora, serif' }}>
              Expert Social Media Management
            </p>
            <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#5C5347', fontFamily: 'Inter, sans-serif' }}>
              Stop managing your manager. Experience strategic partnership that delivers measurable results and gives you back your time—without the mental load.
            </p>
          </header>

          {/* Services Grid - Improved layout */}
          <div className="relative">
            {/* Brush stroke connectors */}
            <div className="brush-connector-services brush-left-services hidden lg:block" aria-hidden="true"></div>
            <div className="brush-connector-services brush-right-services hidden lg:block" aria-hidden="true"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start relative z-10 mb-16">
              {/* Service 1: Photography and Videography */}
              <article className="flex flex-col items-center">
                <div className="service-circle-unified">
                  <div className="circle-outer-unified" style={{ background: 'linear-gradient(135deg, rgba(212, 164, 154, 0.15), rgba(232, 196, 184, 0.15))' }}>
                    <div className="circle-middle-unified">
                      <div className="circle-inner-unified" style={{ background: 'linear-gradient(135deg, #3A4F41 0%, #2C3A31 100%)' }}>
                        <div 
                          className="circle-bg-image-unified"
                          style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop)',
                          }}
                          aria-hidden="true"
                        ></div>
                        <svg 
                          className="service-icon-unified" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                          <circle cx="12" cy="13" r="4"></circle>
                        </svg>
                        <h3 className="service-title-unified">Photography &<br/>Videography</h3>
                        <p className="service-subtitle-unified">Visual Storytelling</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-description-box-unified">
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#5C5347', fontFamily: 'Inter, sans-serif' }}>
                    Professional photo and video content that captures your brand's essence. From product shoots to brand stories, we create visuals that engage and convert.
                  </p>
                </div>
              </article>

              {/* Service 2: Social Media Management */}
              <article className="flex flex-col items-center">
                <div className="service-circle-unified">
                  <div className="circle-outer-unified" style={{ background: 'linear-gradient(135deg, rgba(155, 107, 79, 0.15), rgba(139, 115, 85, 0.15))' }}>
                    <div className="circle-middle-unified">
                      <div className="circle-inner-unified" style={{ background: 'linear-gradient(135deg, #3A4F41 0%, #2C3A31 100%)' }}>
                        <div 
                          className="circle-bg-image-unified"
                          style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop)',
                          }}
                          aria-hidden="true"
                        ></div>
                        <svg 
                          className="service-icon-unified" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                        <h3 className="service-title-unified">Social Media<br/>Management</h3>
                        <p className="service-subtitle-unified">Strategic Growth</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-description-box-unified">
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#5C5347', fontFamily: 'Inter, sans-serif' }}>
                    We lead the strategy and deliver content plans for approval. No more "What do you want to post?" questions—your mental load is zero.
                  </p>
                </div>
              </article>

              {/* Service 3: Content Writing (Blogs) */}
              <article className="flex flex-col items-center">
                <div className="service-circle-unified">
                  <div className="circle-outer-unified" style={{ background: 'linear-gradient(135deg, rgba(212, 164, 154, 0.15), rgba(201, 149, 139, 0.15))' }}>
                    <div className="circle-middle-unified">
                      <div className="circle-inner-unified" style={{ background: 'linear-gradient(135deg, #3A4F41 0%, #2C3A31 100%)' }}>
                        <div 
                          className="circle-bg-image-unified"
                          style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1579762593131-5ac2f0d6e38e?w=400&h=400&fit=crop)',
                          }}
                          aria-hidden="true"
                        ></div>
                        <svg 
                          className="service-icon-unified" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                          <path d="M2 2l7.586 7.586"></path>
                          <circle cx="11" cy="11" r="2"></circle>
                        </svg>
                        <h3 className="service-title-unified">Content Writing<br/>(Blogs)</h3>
                        <p className="service-subtitle-unified">SEO Optimized</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-description-box-unified">
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#5C5347', fontFamily: 'Inter, sans-serif' }}>
                    Engaging blog content that drives traffic and establishes authority. We transform your expertise into articles that resonate with your audience and boost SEO.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* CTA Button - Consistent spacing */}
          <div className="text-center">
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 text-white text-base font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2"
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
              aria-label="Get started with a free strategy session"
            >
              S4Y - Get Started (Free Strategy Session)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

