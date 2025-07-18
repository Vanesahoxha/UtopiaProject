import React from 'react';
import '../styles/Services.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: '/icons/headphones.png',
    title: 'Sound Design',
    description: 'Custom audio for games, movies and interactive media.',
    link: '/sounds',
  },
  {
    icon: '/icons/branding.png',
    title: 'Branding',
    description: 'Creating memorable identities.',
    link: '/projects',
  },
  {
    icon: '/icons/graphic-design.png',
    title: 'Graphic Design',
    description: 'Eye-catching visuals that tell your brand story.',
    link: '/projects',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section className="services-section" ref={ref}>
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={title}
            className="service-card-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
          >
            <Link
              to={link}
              className="service-card-link"
              aria-label={`View ${title} projects`}
            >
              <div className="service-card">
                <div className="service-icon">
                  <img
                    src={icon}
                    alt={`${title} icon`}
                    className="service-icon-img"
                  />
                </div>
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
