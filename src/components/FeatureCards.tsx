import React, { useEffect, useRef, useState } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: '🔄',
    title: 'Learning Circles',
    description: 'Small, focused groups designed for members to collaborate on specific topics. Work on projects, foster in-depth discussions and knowledge sharing.',
    gradient: 'linear-gradient(135deg, #2E85FE, #1a5fc9)',
  },
  {
    icon: '🎯',
    title: 'Interest Groups',
    description: 'Larger communities formed around shared passions and goals. Collaborate, share insights, and solve challenges in areas you\'re passionate about.',
    gradient: 'linear-gradient(135deg, #6E5AF2, #4a3ab0)',
  },
  {
    icon: '🆔',
    title: 'The µID',
    description: 'Your digital portfolio showcasing all projects, challenges, and contributions. A real-world proof of your skills for industry professionals.',
    gradient: 'linear-gradient(135deg, #AF2EE6, #8a1fc0)',
  },
  {
    icon: '💫',
    title: 'Karma System',
    description: 'Earn karma points as you complete challenges and contribute to the community. Track your growth on the leaderboard.',
    gradient: 'linear-gradient(135deg, #E02E6E, #b01f55)',
  },
];

const FeatureCards: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  };

  return (
    <div style={containerStyle}>
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </div>
  );
};

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({
  feature,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    padding: '40px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '24px',
    overflow: 'hidden',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
    transition: 'all 0.6s ease',
    transitionDelay: `${index * 0.1}s`,
    cursor: 'pointer',
  };

  const glowStyle: React.CSSProperties = {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: feature.gradient,
    filter: 'blur(80px)',
    opacity: isHovered ? 0.3 : 0.1,
    top: mousePos.y - 100,
    left: mousePos.x - 100,
    pointerEvents: 'none',
    transition: 'opacity 0.3s ease',
  };

  const iconContainerStyle: React.CSSProperties = {
    width: '72px',
    height: '72px',
    borderRadius: '20px',
    background: feature.gradient,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    marginBottom: '24px',
    boxShadow: isHovered ? '0 10px 40px rgba(0,0,0,0.3)' : '0 5px 20px rgba(0,0,0,0.2)',
    transform: isHovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)',
    transition: 'all 0.3s ease',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '22px',
    fontWeight: 700,
    marginBottom: '12px',
    color: 'white',
    position: 'relative',
    zIndex: 1,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '15px',
    color: 'var(--muted-text)',
    lineHeight: 1.7,
    position: 'relative',
    zIndex: 1,
  };

  return (
    <div
      ref={cardRef}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div style={glowStyle} />
      <div style={iconContainerStyle}>{feature.icon}</div>
      <h3 style={titleStyle}>{feature.title}</h3>
      <p style={descriptionStyle}>{feature.description}</p>
    </div>
  );
};

export default FeatureCards;
