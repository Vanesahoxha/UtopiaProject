
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/featuredProjects.css';

const featuredProjects = [
  {
    id: 1,
    title: 'Brand Identity Redesign',
    thumbnail: '/graphics/brand-identity.jpg',
    link: '/projects/brand-identity-redesign',
  },
  {
    id: 2,
    title: 'Epic Soundscape',
    thumbnail: '/graphics/sound.jpg',
    link: '/sounds/epic-soundscape',
  },

  {
    id: 3,
    title: 'Movie Sound Design',
    thumbnail: '/graphics/movie-audio.jpg',
    link: '/sounds/ambient-audio-pack',
  },

  {
    id: 4,
    title: 'UI/UX Design',
    thumbnail: '/graphics/UI-UX.jpg',
    link: '/projects/UI-UX-design',
  },

];

const FeaturedProjects = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center text-deep-blue mb-costum">
        Featured Projects Preview
      </h2>
      <Carousel fade interval={4000} controls indicators>
        {featuredProjects.map(({ id, title, thumbnail, link }) => (
          <Carousel.Item key={id}>
            <Link to={link} aria-label={`View details of ${title}`}>
              <img
                className="d-block w-100 rounded"
                src={thumbnail}
                alt={`${title} thumbnail`}
                style={{ maxHeight: '450px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h5
                  className="bg-dark bg-opacity-50 px-3 py-2 rounded text-white"
                  style={{
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  {title}
                </h5>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedProjects;
