import React from 'react';

function Footer() {
  return (
    <footer className="py-5">
      <div className="container text-center">
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-3">
          <a href="#" className="text-secondary">Privacy Policy</a>
          <a href="#" className="text-secondary">Terms of Service</a>
          <a href="#contact" className="text-secondary">Contact Us</a>
        </div>
        <p className="text-secondary">© 2024 GymAxis. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;