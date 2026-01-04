import React, { useEffect, useRef, useState } from 'react';

interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: '🎯',
    title: 'Skills in Demand',
    description: 'The platform identifies skills that industries are actively looking for. These skills are broken down into engaging tasks and challenges that simulate real-world scenarios.',
    color: '#2E85FE',
  },
  {
    number: '02',
    icon: '⚡',
    title: 'Earn Karma Points',
    description: 'As you complete tasks and challenges, you earn Karma Points — a measure of your growth and contribution. Rise up the leaderboard showcasing your achievements.',
    color: '#6E5AF2',
  },
  {
    number: '03',
    icon: '🚀',
    title: 'Unlock Opportunities',
    description: 'By rising through the ranks, gain access to exclusive internships, real-world projects, and mentorship programs with industry leaders.',
    color: '#AF2EE6',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {steps.map((step, index) => (
        <StepCard key={index} step={step} index={index} />
      ))}
    </div>
  );
};

const StepCard: React.FC<{ step: Step; index: number }> = ({ step, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cardStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '40px',
    alignItems: 'center',
    padding: '40px',
    background: isHovered
      ? 'rgba(255,255,255,0.05)'
      : 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '24px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? 'translateX(0)'
      : index % 2 === 0
      ? 'translateX(-50px)'
      : 'translateX(50px)',
    transition: 'all 0.6s ease',
    transitionDelay: `${index * 0.15}s`,
    cursor: 'pointer',
  };

  const numberStyle: React.CSSProperties = {
    fontSize: '80px',
    fontWeight: 700,
    background: `linear-gradient(135deg, ${step.color}, transparent)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    opacity: 0.3,
    lineHeight: 1,
    minWidth: '120px',
    textAlign: 'center',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const iconTitleStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  };

  const iconStyle: React.CSSProperties = {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
    border: `1px solid ${step.color}40`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    boxShadow: isHovered ? `0 0 30px ${step.color}40` : 'none',
    transition: 'box-shadow 0.3s ease',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: 700,
    color: 'white',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    color: 'var(--muted-text)',
    lineHeight: 1.8,
    maxWidth: '600px',
  };

  return (
    <div
      ref={cardRef}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={numberStyle}>{step.number}</div>
      <div style={contentStyle}>
        <div style={iconTitleStyle}>
          <div style={iconStyle}>{step.icon}</div>
          <h3 style={titleStyle}>{step.title}</h3>
        </div>
        <p style={descriptionStyle}>{step.description}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
