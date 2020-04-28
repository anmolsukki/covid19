import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div className="footer-pos px-3 py-3 mt-5" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <Link to="/privacy-policy" style={{ color: '#1f1a1a' }}>
          privacy policy
        </Link>
        <span style={{ margin: '10px', color: '#135aac' }}>|</span>
        <Link to="/disclaimer" style={{ color: '#1f1a1a' }}>
          Disclaimer
        </Link>
        <span style={{ margin: '10px', color: '#135aac' }}>|</span>
        <Link to="/cookies-policy" style={{ color: '#1f1a1a' }}>
          cookie policy
        </Link>
        <span style={{ margin: '10px', color: '#135aac' }}>|</span>
        <Link to="/term-condition" style={{ color: '#1f1a1a' }}>
          Terms and Condition
        </Link>
        <span style={{ margin: '10px', color: '#135aac' }}>|</span>
        <a href="https://www.facebook.com/coronacontrols/">
          <img src="https://img.icons8.com/officexs/20/000000/facebook-new.png" alt="" />
        </a>
      </div>
    </div>
  );
}
