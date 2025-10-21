const FAQ = () => {
  const faqs = [
    {
      category: "Services",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      question: "What's included in your social media management packages?",
      answer: "Our packages include content strategy development, custom content creation (graphics, photos, videos), daily posting and scheduling, community management, monthly analytics reports, and ongoing strategy optimization. We also provide content calendar approval, brand voice development, and hashtag research. Think of us as your complete in-house social media team, minus the overhead."
    },
    {
      category: "Process",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      question: "How quickly can you get started with my accounts?",
      answer: "We can typically onboard new clients within 5-7 business days. This includes our initial strategy session, brand discovery call, social media audit, and development of your first month's content calendar. If you have urgent needs, we can expedite the process. We prioritize quality over speed to ensure we capture your brand voice perfectly from the start."
    },
    {
      category: "Pricing",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      question: "What are your pricing options and contract terms?",
      answer: "We offer flexible month-to-month contracts starting at $997/month for basic management up to $2,997/month for our premium package with full-service content creation. No long-term commitments required, though we recommend a minimum 3-month partnership to see real results. Custom enterprise packages are available for brands with unique needs. Schedule a consultation for a personalized quote."
    },
    {
      category: "Results",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      question: "When will I start seeing results from social media management?",
      answer: "Most clients see initial improvements in engagement within 2-4 weeks. Significant growth in followers, reach, and conversions typically occurs within 3-6 months as algorithms recognize consistent quality content. We focus on sustainable, organic growth rather than quick vanity metrics. Your first month focuses on foundation-building, with momentum accelerating in months 2-3."
    },
    {
      category: "Strategy",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      question: "How do you create a strategy tailored to my specific business?",
      answer: "We start with in-depth competitor analysis, audience research, and brand positioning workshops. We analyze what's working in your industry, identify content gaps, and develop a custom content pillars framework. Your strategy includes platform-specific tactics, optimal posting times, content themes, and KPIs aligned with your business goals – whether that's brand awareness, lead generation, or sales."
    },
    {
      category: "Communication",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      question: "How often will we communicate and what's the process?",
      answer: "You'll have direct access to your dedicated account manager via email, Slack, or your preferred platform. We schedule monthly strategy calls and provide weekly check-ins via your chosen communication method. You'll receive real-time notifications for important engagement or opportunities. We're responsive during business hours and handle urgent matters promptly."
    },
    {
      category: "Requirements",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      question: "What information do you need from me to get started?",
      answer: "We'll need admin access to your social accounts, brand guidelines (if you have them), logo files, any existing content you'd like us to use, and insight into your business goals and target audience. We'll guide you through our simple onboarding questionnaire that helps us understand your brand voice, preferences, and no-go zones. Don't worry – we make it easy!"
    },
    {
      category: "Support",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ),
      question: "What happens if I'm not happy with the service?",
      answer: "Client satisfaction is our top priority. With our month-to-month contracts, you're free to cancel anytime with 30 days notice. However, we work proactively to address any concerns immediately. We offer unlimited revisions on content and will adjust strategy as needed. Most concerns are resolved quickly through open communication – we're partners in your success."
    }
  ];

  const stats = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      number: "150+",
      label: "Happy Clients"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      number: "2.5M+",
      label: "Engagement Generated"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      number: "24/7",
      label: "Support Available"
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .faq-section {
          padding: 100px 20px;
          position: relative;
          background: #FFFBF7;
          font-family: 'Inter', sans-serif;
        }

        .heading {
          font-family: 'Lora', serif;
          font-weight: 600;
          color: #2C2820;
          letter-spacing: -0.02em;
        }

        .subheading {
          font-family: 'Lora', serif;
          font-weight: 400;
          color: #8B7355;
          font-style: italic;
        }

        .body-text {
          color: #5C5347;
          line-height: 1.8;
        }

        /* Split Layout */
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 80px;
          align-items: start;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Sticky Sidebar */
        .faq-sidebar {
          position: sticky;
          top: 40px;
          background: linear-gradient(135deg, #3A4F41 0%, #2C3A31 100%);
          padding: 48px;
          border-radius: 16px;
          color: white;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
        }

        .sidebar-title {
          font-family: 'Lora', serif;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: white;
        }

        .sidebar-description {
          font-size: 1rem;
          line-height: 1.7;
          opacity: 0.9;
          margin-bottom: 32px;
        }

        .sidebar-stats {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-icon svg {
          width: 24px;
          height: 24px;
          color: #D4A49A;
        }

        .stat-content h4 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #D4A49A;
          margin-bottom: 4px;
        }

        .stat-content p {
          font-size: 0.9rem;
          opacity: 0.85;
        }

        .cta-button {
          background: #D4A49A;
          color: #2C2820;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          width: 100%;
          text-align: center;
          box-shadow: 0 4px 12px rgba(212, 164, 154, 0.3);
        }

        .cta-button:hover {
          background: #E8C4B8;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212, 164, 154, 0.4);
        }

        /* FAQ Cards */
        .faq-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-card {
          background: white;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .faq-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
        }

        .faq-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .faq-card:hover::before {
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .faq-card:nth-child(1) { --accent-color: #FF8C5A; }
        .faq-card:nth-child(2) { --accent-color: #F4D160; }
        .faq-card:nth-child(3) { --accent-color: #F4A89F; }
        .faq-card:nth-child(4) { --accent-color: #8BA897; }
        .faq-card:nth-child(5) { --accent-color: #CD6D5D; }
        .faq-card:nth-child(6) { --accent-color: #E8A65D; }
        .faq-card:nth-child(7) { --accent-color: #FF8C5A; }
        .faq-card:nth-child(8) { --accent-color: #F4D160; }

        .faq-card-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 16px;
        }

        .faq-icon-circle {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #D4A49A 0%, #C9958B 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .faq-icon-circle svg {
          width: 24px;
          height: 24px;
          color: white;
        }

        .faq-card-title {
          font-family: 'Lora', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #2C2820;
          margin: 0;
          flex: 1;
        }

        .faq-card-answer {
          font-size: 1rem;
          line-height: 1.7;
          color: #5C5347;
          margin: 0;
          padding-left: 68px;
        }

        /* Category Tags */
        .faq-category {
          display: inline-block;
          background: #FFFBF7;
          color: #9B6B4F;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }

        @media (max-width: 1024px) {
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .faq-sidebar {
            position: relative;
            top: 0;
          }
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 60px 16px;
          }

          .faq-sidebar {
            padding: 32px 24px;
          }

          .sidebar-title {
            font-size: 1.5rem;
          }

          .faq-card {
            padding: 24px;
          }

          .faq-card-answer {
            padding-left: 0;
            margin-top: 16px;
          }

          .faq-card-header {
            flex-direction: column;
          }

          .sidebar-stats {
            gap: 16px;
          }
        }
      `}</style>

      <div className="faq-grid">
        {/* Left Sidebar */}
        <aside className="faq-sidebar">
          <h2 className="sidebar-title">
            Your Questions,<br/>Answered
          </h2>
          <p className="sidebar-description">
            Everything you need to know about working with Socials 4U. Can't find what you're looking for? Reach out directly and we'll get back to you within 24 hours.
          </p>
          
          <a href="#contact" className="cta-button">
            Get In Touch
          </a>

          <div className="sidebar-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <h4>{stat.number}</h4>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Right Content */}
        <div className="faq-content">
          {faqs.map((faq, index) => (
            <article key={index} className="faq-card">
              <span className="faq-category">{faq.category}</span>
              <div className="faq-card-header">
                <div className="faq-icon-circle">
                  {faq.icon}
                </div>
                <h3 className="faq-card-title">{faq.question}</h3>
              </div>
              <p className="faq-card-answer">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

