import React from 'react';

function Features() {
  const features = [
    {
      title: 'Member Management',
      description: 'Effortlessly manage member profiles, track attendance, and communicate effectively.',
      image: '/images/features-1.jpeg',
    },
    {
      title: 'QR Attendance',
      description: 'Enable seamless check-ins with QR code scanning, reducing wait times.',
      image: '/images/features-2.webp',
    },
    {
      title: 'Notifications & Alerts',
      description: 'Keep members informed with timely notifications about classes and events.',
      image: '/images/features-3.webp',
    },
    {
      title: 'Dashboard & Reports',
      description: 'Gain insights into member engagement and gym performance with reports.',
      image: '/images/features-4.webp',
    },
  ];

  return (
    <section id="features" className="py-5 bg-dark text-white">
      <div className="container">
        <h2
          className="fs-1 fw-bold mb-4 text-center border-bottom border-secondary pb-3"
        >
          Why Choose GymAxis?
        </h2>
        {features.map((feature, index) => (
          <div
            className={`row justify-content-between g-8 my-4 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            key={index}
          >
            <div className="col-12 col-lg-4">
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded img-fluid"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-12 col-lg-7 d-flex flex-column justify-content-center px-3">
              <div className="mb-2">{feature.icon}</div>
              <h3 className="text-white fs-4 fw-bold mb-1">{feature.title}</h3>
              <div
                className="mb-2"
                style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, #3B82F6, #1C2526)',
                }}
              ></div>
              <p className="text-secondary fs-6 mb-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;