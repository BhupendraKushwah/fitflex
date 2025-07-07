import React from 'react';

function Hero() {
  return (
    <section className="py-5">
      <div className="container">
        <div
          className="d-flex flex-column align-items-center justify-content-center text-center rounded-3 p-4 animate__animated animate__fadeIn"
          style={{
            minHeight: '480px',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("/images/hero-bg.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="text-white display-4 fw-bold mb-3">Elevate Your Gym Management with GymAxis</h1>
          <p className="text-white lead mb-4">Streamline operations, boost member engagement, and grow your business.</p>
          <button
            className="btn btn-primary btn-lg"
            style={{ backgroundColor: '#3B82F6', borderColor: '#3B82F6' }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;