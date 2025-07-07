import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-white text-center fs-2 fw-bold mb-3">
          <h2
            className="fs-2 fw-bold mb-3 "
          >
            Let's Connect
          </h2>
          <p className="fs-5 text-white mb-4">
            Ready to transform your gym with GymAxis? Reach out via email or WhatsApp for instant support.
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center g-4">
          <button
            className="cursor-pointer rounded mx-auto gap-2 py-2 px-4  btn btn-primary"
          >
            <span className="truncate">Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;