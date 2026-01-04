import React, { useEffect, useState } from 'react';
import FloatingIcon from './FloatingIcon';

const CallToAction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    padding: '120px 24px',
    textAlign: 'center',
    overflow: 'hidden',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  };

  const cardStyle: React.CSSProperties = {
    padding: '80px 60px',
    background: 'linear-gradient(135deg, rgba(46, 133, 254, 0.1), rgba(175, 46, 230, 0.1))',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '32px',
    backdropFilter: 'blur(20px)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 0.8s ease',
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 20px',
    background: 'rgba(175, 46, 230, 0.15)',
    border: '1px solid rgba(175, 46, 230, 0.3)',
    borderRadius: '50px',
    fontSize: '14px',
    color: '#AF2EE6',
    marginBottom: '24px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: 700,
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #ffffff, #a0a0b0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '18px',
    color: 'var(--muted-text)',
    marginBottom: '40px',
    lineHeight: 1.8,
    maxWidth: '600px',
    margin: '0 auto 40px',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const glowOrbStyle: React.CSSProperties = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    filter: 'blur(100px)',
    opacity: 0.2,
    pointerEvents: 'none',
  };

  return (
    <section style={sectionStyle} id="join">
      {/* Floating Icons */}
      <FloatingIcon icon="🎓" size={40} top="10%" left="5%" delay={0} />
      <FloatingIcon icon="💼" size={35} top="15%" right="10%" delay={0.3} reverse />
      <FloatingIcon icon="🌐" size={38} bottom="20%" left="8%" delay={0.6} />
      <FloatingIcon icon="🔗" size={32} bottom="25%" right="5%" delay={0.9} />

      {/* Glow Orbs */}
      <div style={{ ...glowOrbStyle, background: '#2E85FE', top: '0', left: '10%' }} />
      <div style={{ ...glowOrbStyle, background: '#AF2EE6', bottom: '0', right: '10%' }} />

      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={badgeStyle}>
            <span>🚀</span>
            <span>Start Today</span>
          </div>
          
          <h2 style={titleStyle}>Join the µLearn Movement</h2>
          
          <p style={descriptionStyle}>
            Become a part of something bigger. Lead and inspire your peers. 
            Sign up for your µID to showcase your skills, projects, and achievements to the world.
          </p>

          <div style={buttonContainerStyle}>
            <a 
              href="https://mulearn.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Get Your µID</span>
              <span>→</span>
            </a>
            <a 
              href="#what-is" 
              className="btn-outline"
            >
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
