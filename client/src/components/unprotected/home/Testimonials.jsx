import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "GymAxis has revolutionized our gym's operations. Member management is seamless, and attendance tracking is seamless.",
      author: 'Ethan, Owner of Fitness First',
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="#3B82F6"
          stroke="#FFFFFF"
          strokeWidth="2"
          className="rounded-circle"
        >
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
      ),
      animationDelay: '0s',
    },
    {
      quote: "The reporting features provide insightful insights into our gym's performance.",
      author: 'Olivia, Manager at Elite Fitness',
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="#3B82F6"
          stroke="#FFFFFF"
          strokeWidth="2"
          className="rounded-circle"
        >
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4 4-4-4 1.79-4 4 4 1.79-4 4 4 4.79zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
      ),
      animationDelay: '0.2s',
    },
    {
      quote: "Our members love the easy check-in process with QR codes. It's significantly improved.",
      author: 'Noah, Owner at Powerhouse Gym',
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="#3B82F6"
          stroke="#FFFFFF"
          strokeWidth="2"
          className="rounded-circle"
        >
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
      ),
      animationDelay: '0.4s',
    },
  ];

  return (
    <section id="testimonials" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-white fs-4 fw-bold mb-5 text-center">Testimonials</h2>
        <div className="row g-4 d-flex align-items-stretch">
          {testimonials.map((testimonial, index) => (
            <div
              className="col-12 col-lg-4 animate__animated animate__fadeInUp d-flex flex-column text-center"
              style={{ animationDelay: testimonial.animationDelay }}
              key={index}
            >
              <div className="flex-grow-1 pb-3 border-bottom border-secondary border-0 border-lg-none">
                <div
                  className="mb-3 mx-auto transition-all duration-500"
                  style={{ animation: 'pulse 2s infinite' }}
                >
                  {testimonial.svg}
                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#3B82F6"
                  className="mx-auto mb-3"
                >
                  <path d="M3 11h3v10H3zm15 0h3v10h-3z" />
                </svg>
                <p className="text-white fs-5 fst-italic mb-3 px-3">{testimonial.quote}</p>
                <p className="text-secondary fw-bold">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;