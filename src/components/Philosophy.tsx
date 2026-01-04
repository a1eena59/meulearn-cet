import React, { useEffect, useRef, useState } from 'react';

interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

const philosophies: PhilosophyItem[] = [
  {
    icon: '📖',
    title: 'Knowledge is Free',
    description: 'µLearn believes in open access to learning resources for everyone, regardless of background or location.',
  },
  {
    icon: '💪',
    title: 'Effort-Driven Growth',
    description: 'We believe in growth through effort — like going to the gym, not the spa. Success comes through continuous learning and hard work.',
  },
];

const Philosophy: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  return (
    <div style={containerStyle}>
      {philosophies.map((item, index) => (
        <PhilosophyCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const PhilosophyCard: React.FC<{ item: PhilosophyItem; index: number }> = ({
  item,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    display: 'flex',
    alignItems: 'flex-start',
    gap: '32px',
    padding: '48px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '24px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
    transition: 'all 0.8s ease',
    transitionDelay: `${index * 0.2}s`,
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '48px',
    flexShrink: 0,
    animation: 'float 3s ease-in-out infinite',
    animationDelay: `${index * 0.5}s`,
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #2E85FE, #AF2EE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '18px',
    color: 'var(--muted-text)',
    lineHeight: 1.8,
  };

  return (
    <div ref={cardRef} style={cardStyle}>
      <span style={iconStyle}>{item.icon}</span>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{item.title}</h3>
        <p style={descriptionStyle}>{item.description}</p>
      </div>
    </div>
  );
};

export default Philosophy;
