import React from 'react';

function Dashboard() {
  return (
    <div className="container-fluid bg-primary text-white py-2">
      <div className="container">
        
        <div className="card border-0 rounded-2 bg-secondary text-white mb-2 shadow-sm">
          <div className="card-body d-flex align-items-center">
            <div className="flex-grow-1 me-4">
              <p className="card-text text-secondary font-sm"> {new Date().toDateString()}</p>
              <p className="mb-1 font-sm fw-semibold">Welcome back, Alex</p>
              <h5 className="card-title fs-3">Set up your loyalty card</h5>
              <p className="card-text text-secondary font-sm">Set up your loyalty card to earn rewards and discounts on your membership.</p>
              <button className="btn btn-primary rounded-pill btn-sm mt-2">Set Up</button>
            </div>
            <div
              className="rounded"
              style={{
                width: '100%',
                maxWidth: '200px',
                aspectRatio: '16/9',
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWQgqeTn00efhQg8zD_4h7_POQWzikP20B0w9Z7vLS8wp5t60LKh_HPxyIPcHaldCMH2HoecUcYkiczWSuoUwKpF39gt_Yps0HVB3ZbKQrz1DwEUhDfGmaJLbmbPCIjmnlQyHAWMyiIBwr4SpjjJl3miR66QNhJnendj7L4lnPfrGOxNk4QYkrVjDPm68OHXWYHVozG7-VjlI-SZjo8MFjY68HlQaixbZ9bYCYaY2owCuXbSQyv78lWB1WUU1Fw1cLmrI5d3L22DCF")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
          <div className="col">
            <div className="card bg-secondary text-white">
              <div className="card-body">
                <h5 className="card-title fw-medium">Current Members</h5>
                <p className="card-text fs-3 fw-semibold fs-6">250</p>
                <p className="card-text text-success">+10 %</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-secondary text-white">
              <div className="card-body">
                <h5 className="card-title fw-medium">New Members</h5>
                <p className="card-text fs-3 fw-semibold fs-6">30</p>
                <p className="card-text text-success">+5% </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-secondary text-white">
              <div className="card-body">
                <h5 className="card-title fw-medium">Today's Visitors</h5>
                <p className="card-text fs-3 fw-semibold fs-6">50</p>
                <p className="card-text text-success">+2% </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="fw-medium mb-3">Membership Status</h5>
          <div className="card bg-primary text-white border-secondary">
            <div className="card-body">
              <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                  fill="url(#paint0_linear_1131_5935)"
                ></path>
                <path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                  stroke="#90adcb"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
                <defs>
                  <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#223649"></stop>
                    <stop offset="1" stopColor="#223649" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="d-flex justify-content-around mt-2">
                <p className="text-secondary small fw-semibold fs-6">Jan</p>
                <p className="text-secondary small fw-semibold  fs-6">Feb</p>
                <p className="text-secondary small fw-semibold  fs-6">Mar</p>
                <p className="text-secondary small fw-semibold  fs-6">Apr</p>
                <p className="text-secondary small fw-semibold  fs-6">May</p>
                <p className="text-secondary small fw-semibold  fs-6">Jun</p>
                <p className="text-secondary small fw-semibold  fs-6">Jul</p>
              </ div>
            </div>
          </div>
        </div>

        <div className="card bg-primary text-white border-secondary">
          <div className="card-body">
            <h5 className="card-title fw-medium">Member Satisfaction</h5>
            <p className="card-text fs-3 fw-semibold fs-6">90%</p>
          </ div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;