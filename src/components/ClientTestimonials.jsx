import React from 'react';
import '../styles/ClientTestimonails.css'

const testimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    quote: 'The sound snippets brought our project to life. Incredible quality!',
  },
  {
    id: 2,
    name: 'Mark Stevens',
    quote: 'Professional and fast delivery. Highly recommended!',
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    quote: 'Amazing creativity and attention to detail. Loved working with you.',
  },
];

const ClientTestimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Client Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map(({ id, name, quote }) => (
          <div className="testimonial-card" key={id}>
            <p className="testimonial-quote">"{quote}"</p>
            <p className="testimonial-name">— {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
