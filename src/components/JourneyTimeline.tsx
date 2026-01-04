import React, { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  icon: string;
  title: string;
  description: string;
  highlight?: string;
}

const timelineData: TimelineItem[] = [
  {
    icon: '📊',
    title: 'The Challenge',
    description: 'Traditional education focuses on theory, leaving graduates unprepared for the rapidly changing job market.',
    highlight: 'Skills Gap',
  },
  {
    icon: '💭',
    title: 'The Realization',
    description: 'Technological advancements redefine roles. Automation replaces repetitive jobs. The workforce must adapt.',
    highlight: 'Need for Change',
  },
  {
    icon: '✨',
    title: 'The Solution',
    description: 'µLearn emerges — making learning collaborative, hands-on, and practical for today\'s fast-changing world.',
    highlight: 'µLearn',
  },
  {
    icon: '🚀',
    title: 'Your Journey Begins',
    description: 'Join a community where micro-learning creates macro impact. Develop skills, earn karma, unlock opportunities.',
    highlight: 'Join Now',
  },
];

const JourneyTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            setActiveIndex((prev) => Math.max(prev, index));
          }
        });
      },
      { threshold: 0.5 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
    paddingLeft: '60px',
  };

  const lineStyle: React.CSSProperties = {
    position: 'absolute',
    left: '24px',
    top: '0',
    bottom: '0',
    width: '4px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '2px',
  };

  const progressStyle: React.CSSProperties = {
    position: 'absolute',
    left: '24px',
    top: '0',
    width: '4px',
    background: 'linear-gradient(180deg, #2E85FE, #AF2EE6)',
    borderRadius: '2px',
    height: `${((activeIndex + 1) / timelineData.length) * 100}%`,
    transition: 'height 0.5s ease',
    boxShadow: '0 0 20px rgba(46, 133, 254, 0.5)',
  };

  return (
    <div style={containerStyle}>
      <div style={lineStyle} />
      <div style={progressStyle} />
      
      {timelineData.map((item, index) => (
        <TimelineItemComponent
          key={index}
          item={item}
          index={index}
          isActive={index <= activeIndex}
          ref={(el) => (itemRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  isActive: boolean;
}

const TimelineItemComponent = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ item, index, isActive }, ref) => {
    const itemStyle: React.CSSProperties = {
      position: 'relative',
      paddingBottom: '60px',
      paddingLeft: '40px',
      opacity: isActive ? 1 : 0.3,
      transform: isActive ? 'translateX(0)' : 'translateX(-20px)',
      transition: 'all 0.6s ease',
    };

    const dotStyle: React.CSSProperties = {
      position: 'absolute',
      left: '-36px',
      top: '0',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: isActive
        ? 'linear-gradient(135deg, #2E85FE, #AF2EE6)'
        : 'rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      boxShadow: isActive ? '0 0 30px rgba(46, 133, 254, 0.4)' : 'none',
      transition: 'all 0.4s ease',
    };

    const highlightStyle: React.CSSProperties = {
      display: 'inline-block',
      padding: '4px 12px',
      background: 'rgba(46, 133, 254, 0.15)',
      border: '1px solid rgba(46, 133, 254, 0.3)',
      borderRadius: '20px',
      fontSize: '12px',
      color: '#2E85FE',
      marginBottom: '12px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    };

    const titleStyle: React.CSSProperties = {
      fontSize: '24px',
      fontWeight: 700,
      marginBottom: '12px',
      color: 'white',
    };

    const descriptionStyle: React.CSSProperties = {
      fontSize: '16px',
      color: 'var(--muted-text)',
      lineHeight: 1.7,
    };

    return (
      <div ref={ref} style={itemStyle}>
        <div style={dotStyle}>{item.icon}</div>
        {item.highlight && <span style={highlightStyle}>{item.highlight}</span>}
        <h3 style={titleStyle}>{item.title}</h3>
        <p style={descriptionStyle}>{item.description}</p>
      </div>
    );
  }
);

TimelineItemComponent.displayName = 'TimelineItemComponent';

export default JourneyTimeline;
