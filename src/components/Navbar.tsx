import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '16px 24px',
    background: isScrolled ? 'rgba(10, 10, 26, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
    transition: 'all 0.3s ease',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: 'white',
  };

  const logoIconStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #2E85FE, #AF2EE6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 700,
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #2E85FE, #AF2EE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  };

  const linkStyle: React.CSSProperties = {
    color: 'var(--muted-text)',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  const linkHoverStyle = {
    color: 'white',
  };

  const mobileMenuBtnStyle: React.CSSProperties = {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
  };

  const mobileMenuStyle: React.CSSProperties = {
    position: 'fixed',
    top: '80px',
    left: 0,
    right: 0,
    background: 'rgba(10, 10, 26, 0.98)',
    backdropFilter: 'blur(20px)',
    padding: '24px',
    display: isMobileMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '16px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={containerStyle}>
          <a href="#hero" style={logoStyle} onClick={() => scrollToSection('hero')}>
            <div style={logoIconStyle}>µ</div>
            <span style={logoTextStyle}>µLearn CET</span>
          </a>

          <div style={navLinksStyle} className="nav-links">
            <a 
              style={linkStyle} 
              onClick={() => scrollToSection('journey')}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { color: 'var(--muted-text)' })}
            >
              Journey
            </a>
            <a 
              style={linkStyle} 
              onClick={() => scrollToSection('what-is')}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { color: 'var(--muted-text)' })}
            >
              About
            </a>
            <a 
              style={linkStyle} 
              onClick={() => scrollToSection('how-it-works')}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { color: 'var(--muted-text)' })}
            >
              How It Works
            </a>
            <a 
              style={linkStyle} 
              onClick={() => scrollToSection('features')}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { color: 'var(--muted-text)' })}
            >
              Features
            </a>
            <a 
              href="https://mulearn.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              Join Now
            </a>
          </div>

          <button 
            style={mobileMenuBtnStyle} 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <div style={mobileMenuStyle} className="mobile-menu">
        <a style={linkStyle} onClick={() => scrollToSection('journey')}>Journey</a>
        <a style={linkStyle} onClick={() => scrollToSection('what-is')}>About</a>
        <a style={linkStyle} onClick={() => scrollToSection('how-it-works')}>How It Works</a>
        <a style={linkStyle} onClick={() => scrollToSection('features')}>Features</a>
        <a 
          href="https://mulearn.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ textAlign: 'center', justifyContent: 'center' }}
        >
          Join Now
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: ${isMobileMenuOpen ? 'flex' : 'none'} !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
