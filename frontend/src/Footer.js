// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-muted mt-4" style={{padding: '10px'}}>
      <small>&copy; {new Date().getFullYear()} Event Manager. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
