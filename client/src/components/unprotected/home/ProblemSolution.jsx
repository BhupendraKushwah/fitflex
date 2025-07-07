import React from 'react';

function ProblemSolution() {
  const challenges = [
    {
      title: 'Inefficient Member Management',
      description: 'Managing member data manually is time-consuming and prone to errors.',
      svg: (
        <svg width="24" height="24" fill="white" viewBox="0 0 256 256">
          <path
            d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
          />
        </svg>
      ),
    },
    {
      title: 'Manual Attendance Tracking',
      description: 'Tracking attendance with spreadsheets or paper is cumbersome and inaccurate.',
      svg: (
        <svg width="24" height="24" fill="white" viewBox="0 0 256 256">
          <path
            d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,0,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"
          />
        </svg>
      ),
    },
    {
      title: 'Poor Communication',
      description: 'Communicating with members through various channels is disorganized and ineffective.',
      svg: (
        <svg width="24" height="24" fill="white" viewBox="0 0 256 256">
          <path
            d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
          />
        </svg>
      ),
    },
    {
      title: 'Limited Reporting',
      description: 'Lack of real-time data hinders informed decision-making and performance analysis.',
      svg: (
        <svg width="24" height="24" fill="white" viewBox="0 0 256 256">
          <path
            d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="mb-4">
          <h1 className="text-white fs-3 fw-bold mb-2">Common Gym Management Challenges</h1>
          <p className="text-secondary">Many gym owners face challenges in efficiently managing their operations, leading to lost revenue and member dissatisfaction.</p>
        </div>
        <div className="row g-3">
          {challenges.map((challenge, index) => (
            <div className="col" key={index}>
              <div
                className="p-4 rounded border border-secondary animate__animated animate__fadeInUp h-100 card-gray"
                style={{ borderColor: '#4B5563', animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-3">{challenge.svg}</div>
                <h2 className="text-white fs-5 fw-bold mb-2">{challenge.title}</h2>
                <p className="text-secondary">{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;