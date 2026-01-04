import React, { useEffect, useRef, useState } from 'react';

interface StorySectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
  align?: 'left' | 'center' | 'right';
}

const StorySection: React.FC<StorySectionProps> = ({
  id,
  title,
  subtitle,
  children,
  dark = false,
  align = 'center',
}) => {
  const sectionRef = useRef<HTMLElement>(null);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    padding: '120px 24px',
    background: dark ? 'var(--darker-bg)' : 'transparent',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: align,
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: '60px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 0.8s ease',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: 700,
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #2E85FE, #AF2EE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '18px',
    color: 'var(--muted-text)',
    maxWidth: '600px',
    margin: align === 'center' ? '0 auto' : '0',
    lineHeight: 1.7,
  };

  const contentStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 0.8s ease 0.2s',
  };

  return (
    <section ref={sectionRef} id={id} style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>{title}</h2>
          {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        </div>
        <div style={contentStyle}>{children}</div>
      </div>
    </section>
  );
};

export default StorySection;
