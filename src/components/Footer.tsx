import React from 'react';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    padding: '60px 24px 40px',
    background: 'var(--darker-bg)',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const topRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '40px',
    marginBottom: '60px',
  };

  const brandStyle: React.CSSProperties = {
    maxWidth: '300px',
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  };

  const logoIconStyle: React.CSSProperties = {
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #2E85FE, #AF2EE6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 700,
    color: 'white',
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #2E85FE, #AF2EE6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const taglineStyle: React.CSSProperties = {
    color: 'var(--muted-text)',
    fontSize: '15px',
    lineHeight: 1.7,
  };

  const linksContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '80px',
    flexWrap: 'wrap',
  };

  const linkColumnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const columnTitleStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 600,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '8px',
  };

  const linkStyle: React.CSSProperties = {
    color: 'var(--muted-text)',
    textDecoration: 'none',
    fontSize: '15px',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  const bottomRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '40px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    flexWrap: 'wrap',
    gap: '16px',
  };

  const copyrightStyle: React.CSSProperties = {
    color: 'var(--muted-text)',
    fontSize: '14px',
  };

  const socialLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
  };

  const socialIconStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={topRowStyle}>
          <div style={brandStyle}>
            <div style={logoStyle}>
              <div style={logoIconStyle}>µ</div>
              <span style={logoTextStyle}>µLearn CET</span>
            </div>
            <p style={taglineStyle}>
              Connecting youth with opportunities and networks. 
              Where micro-learning meets macro impact.
            </p>
          </div>

          <div style={linksContainerStyle}>
            <div style={linkColumnStyle}>
              <h4 style={columnTitleStyle}>Explore</h4>
              <a style={linkStyle} onClick={() => scrollToSection('journey')}>Our Journey</a>
              <a style={linkStyle} onClick={() => scrollToSection('what-is')}>What is µLearn</a>
              <a style={linkStyle} onClick={() => scrollToSection('how-it-works')}>How It Works</a>
              <a style={linkStyle} onClick={() => scrollToSection('features')}>Features</a>
            </div>
            <div style={linkColumnStyle}>
              <h4 style={columnTitleStyle}>Community</h4>
              <a style={linkStyle} href="https://mulearn.org" target="_blank" rel="noopener noreferrer">Join µLearn</a>
              <a style={linkStyle} href="https://discord.gg/mulearn" target="_blank" rel="noopener noreferrer">Discord</a>
              <a style={linkStyle} href="https://www.instagram.com/muaborded/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div style={linkColumnStyle}>
              <h4 style={columnTitleStyle}>Resources</h4>
              <a style={linkStyle}>Learning Circles</a>
              <a style={linkStyle}>Interest Groups</a>
              <a style={linkStyle}>Events</a>
            </div>
          </div>
        </div>

        <div style={bottomRowStyle}>
          <p style={copyrightStyle}>
            © {new Date().getFullYear()} µLearn CET. All rights reserved.
          </p>
          <div style={socialLinksStyle}>
            <a 
              style={socialIconStyle} 
              href="https://discord.gg/mulearn" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#5865F2';
                e.currentTarget.style.borderColor = '#5865F2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              💬
            </a>
            <a 
              style={socialIconStyle}
              href="https://www.instagram.com/muaborded/" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)';
                e.currentTarget.style.borderColor = '#dc2743';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              📸
            </a>
            <a 
              style={socialIconStyle}
              href="https://twitter.com/muaborded" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1DA1F2';
                e.currentTarget.style.borderColor = '#1DA1F2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              🐦
            </a>
            <a 
              style={socialIconStyle}
              href="https://www.linkedin.com/company/mulearn/" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A66C2';
                e.currentTarget.style.borderColor = '#0A66C2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              💼
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
