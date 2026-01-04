import React, { useEffect, useState } from 'react';
import FloatingIcon from './FloatingIcon';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'College of Engineering Trivandrum';

  useEffect(() => {
    setIsVisible(true);
    
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const heroStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '120px 24px',
  };

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    maxWidth: '900px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease',
    position: 'relative',
    zIndex: 2,
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 20px',
    background: 'rgba(46, 133, 254, 0.15)',
    border: '1px solid rgba(46, 133, 254, 0.3)',
    borderRadius: '50px',
    fontSize: '14px',
    color: '#2E85FE',
    marginBottom: '24px',
    animation: 'fadeInScale 0.8s ease forwards',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(48px, 10vw, 100px)',
    fontWeight: 700,
    marginBottom: '8px',
    background: 'linear-gradient(135deg, #2E85FE, #AF2EE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.1,
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(18px, 3vw, 24px)',
    color: 'var(--muted-text)',
    marginBottom: '40px',
    fontWeight: 400,
    minHeight: '32px',
  };

  const cursorStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '3px',
    height: '1em',
    background: '#2E85FE',
    marginLeft: '4px',
    animation: 'blink 1s step-end infinite',
    verticalAlign: 'text-bottom',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '18px',
    color: 'var(--muted-text)',
    marginBottom: '48px',
    lineHeight: 1.8,
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const statsContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    marginTop: '80px',
    paddingTop: '40px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  };

  const statStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  const statNumberStyle: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #2E85FE, #AF2EE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'var(--muted-text)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginTop: '8px',
  };

  const glowOrbStyle: React.CSSProperties = {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    filter: 'blur(100px)',
    opacity: 0.3,
    pointerEvents: 'none',
  };

  const scrollIndicatorStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--muted-text)',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    animation: 'float 2s ease-in-out infinite',
    cursor: 'pointer',
  };

  const mouseStyle: React.CSSProperties = {
    width: '24px',
    height: '40px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: '12px',
    position: 'relative',
  };

  const mouseWheelStyle: React.CSSProperties = {
    position: 'absolute',
    top: '8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '4px',
    height: '8px',
    background: '#2E85FE',
    borderRadius: '2px',
    animation: 'float 1.5s ease-in-out infinite',
  };

  return (
    <section style={heroStyle} id="hero">
      {/* Floating Icons */}
      <FloatingIcon icon="💡" size={50} top="15%" left="10%" delay={0.2} />
      <FloatingIcon icon="🚀" size={45} top="20%" right="12%" delay={0.5} reverse />
      <FloatingIcon icon="⚡" size={40} bottom="25%" left="8%" delay={0.8} />
      <FloatingIcon icon="🎯" size={35} top="40%" right="8%" delay={1} />
      <FloatingIcon icon="🌟" size={42} bottom="30%" right="15%" delay={1.2} reverse />
      <FloatingIcon icon="💻" size={38} top="60%" left="15%" delay={0.6} />
      <FloatingIcon icon="🔮" size={36} bottom="20%" left="20%" delay={1.4} reverse />
      <FloatingIcon icon="📚" size={34} top="25%" left="25%" delay={0.9} />

      {/* Glow Orbs */}
      <div style={{ ...glowOrbStyle, background: '#2E85FE', top: '-10%', left: '-10%' }} />
      <div style={{ ...glowOrbStyle, background: '#AF2EE6', bottom: '-10%', right: '-10%' }} />

      <div style={contentStyle}>
        <div style={badgeStyle}>
          <span>✨</span>
          <span>Campus Chapter</span>
        </div>
        
        <h1 style={titleStyle}>µLearn</h1>
        <p style={subtitleStyle}>
          {typedText}
          <span style={cursorStyle} />
        </p>
        
        <p style={descriptionStyle}>
          Connecting youth with opportunities and networks. 
          <br />
          Where micro-learning meets macro impact.
        </p>

        <div style={buttonContainerStyle}>
          <a href="#journey" className="btn-primary">
            <span>Begin Your Journey</span>
            <span>→</span>
          </a>
          <a href="#what-is" className="btn-outline">
            <span>Discover µLearn</span>
          </a>
        </div>

        <div style={statsContainerStyle}>
          <div style={statStyle}>
            <div style={statNumberStyle}>500+</div>
            <div style={statLabelStyle}>Active Learners</div>
          </div>
          <div style={statStyle}>
            <div style={statNumberStyle}>50+</div>
            <div style={statLabelStyle}>Interest Groups</div>
          </div>
          <div style={statStyle}>
            <div style={statNumberStyle}>100+</div>
            <div style={statLabelStyle}>Events Hosted</div>
          </div>
        </div>
      </div>

      <div style={scrollIndicatorStyle} onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}>
        <div style={mouseStyle}>
          <div style={mouseWheelStyle} />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
