import React from 'react';
import '../styles/globals.css';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import JourneyTimeline from '../components/JourneyTimeline';
import HowItWorks from '../components/HowItWorks';
import FeatureCards from '../components/FeatureCards';
import Philosophy from '../components/Philosophy';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <ParticleBackground />
      <Navbar />
      
      <main>
        <Hero />
        
        <StorySection
          id="journey"
          title="The Story Begins..."
          subtitle="From challenge to opportunity — discover why µLearn exists and how it's transforming education."
          dark
        >
          <JourneyTimeline />
        </StorySection>

        <StorySection
          id="what-is"
          title="What is µLearn?"
          subtitle="µ stands for Micro-learning. µLearn makes learning collaborative, hands-on, and practical for today's fast-changing job market."
        >
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '60px',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              width: '100%',
              maxWidth: '900px',
            }}>
              {[
                { icon: '🌍', text: 'Accessible to anyone, anywhere' },
                { icon: '🔗', text: 'Breaking barriers to education' },
                { icon: '📈', text: 'Upgrade skills continuously' },
                { icon: '🤝', text: 'Connect with industry leaders' },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '32px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}>
                  <span style={{ fontSize: '32px' }}>{item.icon}</span>
                  <span style={{ color: 'var(--muted-text)', fontSize: '15px', textAlign: 'left' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </StorySection>

        <StorySection
          id="how-it-works"
          title="How It Works"
          subtitle="Your journey from learner to industry-ready professional in three powerful steps."
          dark
        >
          <HowItWorks />
        </StorySection>

        <StorySection
          id="features"
          title="Key Features"
          subtitle="Discover the tools and communities that power your learning journey."
        >
          <FeatureCards />
        </StorySection>

        <StorySection
          id="philosophy"
          title="Our Philosophy"
          subtitle="The core beliefs that drive everything we do at µLearn."
          dark
        >
          <Philosophy />
        </StorySection>

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
