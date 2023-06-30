import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', background: '#f5f5f5' }}>
      <p>© {new Date().getFullYear()} Self-Knitted Toy Animals Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;