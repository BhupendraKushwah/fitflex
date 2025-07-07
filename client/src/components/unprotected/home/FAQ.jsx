import React from 'react';

function FAQ() {
  const faqs = [
    {
      question: 'What is GymAxis?',
      answer: 'GymAxis is a comprehensive gym management system designed to streamline operations, enhance member engagement, and drive business growth for gym owners.',
    },
    {
      question: 'How does GymAxis improve gym management?',
      answer: 'GymAxis offers tools for member management, QR attendance, notifications, and analytics to simplify operations and boost efficiency.',
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-white fs-4 fw-bold mb-3">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item bg-dark border border-secondary" style={{ borderColor: '#4B5563' }} key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-secondary">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;