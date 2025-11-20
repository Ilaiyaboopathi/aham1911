import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { useNavigate } from "react-router-dom";

import { CheckCircle2, Users, Target, TrendingUp, Heart, Sparkles, Award, BookOpen } from 'lucide-react';
import './LifeAtAham.css';

const LifeAtAham = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    { icon: <Heart className="w-6 h-6" />, title: 'Respect for every individual' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'Openness in thoughts and solutions' },
    { icon: <Target className="w-6 h-6" />, title: 'Ownership in every action' },
    { icon: <BookOpen className="w-6 h-6" />, title: 'Continuous learning as a habit' }
  ];

  const environmentFeatures = [
    'Flat communication, no unnecessary hierarchy',
    'Freedom to explore and try new ideas',
    'Supportive team culture',
    'Transparent and constructive feedback systems'
  ];

  const growthOpportunities = [
    { icon: <Award className="w-5 h-5" />, text: 'Skill development sessions & workshops' },
    { icon: <Users className="w-5 h-5" />, text: 'Internal training and knowledge sharing' },
    { icon: <Target className="w-5 h-5" />, text: 'Real ownership of projects from Day 1' },
    { icon: <TrendingUp className="w-5 h-5" />, text: 'Clear progression paths and role growth' }
  ];

  const lifeHighlights = [
    'Festival and cultural celebrations',
    'Team lunches & outdoor meets',
    'Employee recognition programs',
    'A workplace filled with positivity & support'
  ];

  return (
    <div className="life-at-aham">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
           src="/img/ahamlife/Team-banner.webp"
            alt="Team collaboration"
            className="hero-image"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Life at Aham</h1>
          <p className="hero-subtitle">Where people grow, ideas evolve, and impact happens every day.</p>
                <Button
                variant="outline"
                className="hero-cta"
                onClick={() => navigate("/contact")}
              >
                Join Our Team
              </Button>

          {/* <Button className="hero-cta">Join Our Team</Button> */}
        </div>
      </section>

      {/* Section 1: Our Culture */}
      <section className="culture-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Our Foundation</span>
            <h2 className="section-title">Who We Are</h2>
          </div>
          
          <div className="culture-grid">
            <div className="culture-text">
              <p className="culture-description">
                At Aham, we believe work should feel meaningful. We are driven by curiosity, ownership, and a shared purpose to build solutions that matter. Every idea is valued, every voice is heard, and every individual is encouraged to grow in their own way.
              </p>
              <p className="culture-description-secondary">
                We don't just work together, we learn, experiment, challenge, and build together.
              </p>
              
              <h3 className="values-heading">Key Values</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <p className="value-text">{value.title}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="culture-images">
              <div className="culture-image-wrapper image-1">
                <img 
                  src=" /img/ahamMoments/Shared-goals.webp"
                  alt="Diverse team"
                  className="culture-img"
                />
              </div>
              <div className="culture-image-wrapper image-2">
                <img 
                  src="/img/ahamlife/Team-collaboration.webp"
                  alt="Team collaboration"
                  className="culture-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Work Environment */}
      <section className="environment-section">
        <div className="section-container">
          <div className="section-header centered">
            <span className="section-label">Where We Thrive</span>
            <h2 className="section-title">The Environment We Create</h2>
            <p className="section-intro">
              Our workspace is built on collaboration and trust. Whether you're solving real business challenges or brainstorming with teammates, you will always find space to create and contribute.
            </p>
          </div>

          <div className="environment-content">
            <div className="environment-images">
              <div className="env-image-large">
                <img 
                  src="/img/ahamMoments/Planning.webp"
                  alt="Modern workspace"
                />
              </div>
              {/* <div className="env-image-small">
                <img 
                  src="https://images.unsplash.com/photo-1703355685952-03ed19f70f51"
                  alt="Conference room"
                />
              </div> */}
            </div>

            <Card className="environment-features">
              <h3 className="features-heading">What Makes Our Environment Unique</h3>
              <ul className="features-list">
                {environmentFeatures.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <CheckCircle2 className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Growth & Opportunities */}
      <section className="growth-section">
        <div className="section-container">
          <div className="growth-layout">
            <div className="growth-images">
              <div className="growth-image-wrapper primary">
                <img 
                  src="/img/ahamlife/Training-session.webp"
                  alt="Training session"
                />
              </div>
              <div className="growth-image-wrapper secondary">
                <img 
                  src="/img/ahamlife/Mentorship.webp"
                  alt="Mentorship"
                />
              </div>
            </div>

            <div className="growth-content">
              <div className="section-header">
                <span className="section-label">Your Journey</span>
                <h2 className="section-title">Grow With Us</h2>
              </div>
              <p className="growth-intro">
                People grow here — in skills, confidence, and mindset.
                We invest in learning, mentorship, and opportunities that help each individual become the best version of themselves.
              </p>

              <h3 className="opportunities-heading">Growth Opportunities</h3>
              <div className="opportunities-grid">
                {growthOpportunities.map((opportunity, index) => (
                  <div key={index} className="opportunity-card">
                    <div className="opportunity-icon">{opportunity.icon}</div>
                    <p className="opportunity-text">{opportunity.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Life Beyond Work */}
      <section className="life-section">
        <div className="section-container">
          <div className="section-header centered">
            <span className="section-label">Beyond Work</span>
            <h2 className="section-title">Life Beyond Work</h2>
            <p className="section-intro">
              At Aham, work is important, but people come first.
              We celebrate together, learn together, and make memories along the way. From team outings to internal events and celebrations, we enjoy the journey as much as the work.
            </p>
          </div>

          <div className="life-content">
            <div className="life-images">
              <div className="life-image-card">
                <img 
                 src="/img/ahamlife/Team-celebration.webp"
                  alt="Team celebration"
                />
              </div>
              <div className="life-image-card">
                <img 
                 src="/img/ahamlife/Workplace-fun.webp"
                  alt="Workplace fun"
                />
              </div>
            </div>

            <div className="highlights-grid">
              {lifeHighlights.map((highlight, index) => (
                <Card key={index} className="highlight-card">
                  <CheckCircle2 className="highlight-icon" />
                  <p className="highlight-text">{highlight}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Join Us?</h2>
          <p className="cta-text">
            Join us and be part of a workplace where your work has meaning, your voice has value, and your growth has no boundaries.
          </p>
          <div className="cta-buttons">
           {/* <Button
              className="cta-primary"
              onClick={() => navigate("/careers")}
            >
              Explore Open Positions
            </Button> */}

              <Button
                variant="outline"
                className="cta-secondary"
                onClick={() => navigate("/about-us")}
              >
                Learn More About Aham
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeAtAham;