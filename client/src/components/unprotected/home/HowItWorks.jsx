import React from 'react';

function HowItWorks() {
  const steps = [
    {
      title: 'Sign Up & Onboarding',
      description: 'Create your account and complete the onboarding process.',
      svg: (
        <svg width="24" height="24" fill="white" viewBox="0 0 256 256">
          <path
            d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"
          />
        </svg>
      ),
    },
    {
      title: 'Customize Your Settings',
      description: 'Configure your gym details, services, and pricing plans.',
      svg: (
        <svg width="24" height="24" fill="white" viewBox="0 0 256 256">
          <path
            d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"
          />
        </svg>
      ),
    },
    {
      title: 'Start Managing Your Gym',
      description: "Utilize GymAxis's features to manage members, track attendance, and communicate effectively.",
      svg: (
        <svg width="24" height="24" fill="white" viewBox="0 0 256 256">
          <path
            d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm96,112h-8V144a8,8,0,0,0-16,0v24H195.1l20.49-61.47a8,8,0,0,0-15.18-5.06l-24,72A8,8,0,0,0,184,184h40v24a8,8,0,0,0,16,0V184h8a8,8,0,0,0,0-16Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-white text-center fs-2 fw-bold mb-3">How It Works</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div className="col-12 d-flex align-items-start mb-3 animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.2}s` }} key={index}>
              <div className="d-flex flex-column align-items-center me-3">
                <div className="mb-2">{step.svg}</div>
                {index < steps.length - 1 && <div className="bg-secondary" style={{ width: '1.5px', height: '100px' }}></div>}
              </div>
              <div>
                <p className="text-white fs-5 fw-medium mb-1">{step.title}</p>
                <p className="text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;