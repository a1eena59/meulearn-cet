import React, { useEffect, useState } from 'react';

interface FloatingIconProps {
  icon: string;
  size?: number;
  delay?: number;
  duration?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  reverse?: boolean;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  icon,
  size = 40,
  delay = 0,
  duration = 4,
  top,
  left,
  right,
  bottom,
  opacity = 0.6,
  reverse = false,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const style: React.CSSProperties = {
    position: 'absolute',
    fontSize: `${size}px`,
    top,
    left,
    right,
    bottom,
    opacity: mounted ? opacity : 0,
    animation: mounted ? `${reverse ? 'floatReverse' : 'float'} ${duration}s ease-in-out infinite` : 'none',
    animationDelay: `${delay}s`,
    transition: 'opacity 1s ease',
    pointerEvents: 'none',
    zIndex: 1,
    filter: 'drop-shadow(0 0 10px rgba(46, 133, 254, 0.3))',
  };

  return <span style={style}>{icon}</span>;
};

export default FloatingIcon;
