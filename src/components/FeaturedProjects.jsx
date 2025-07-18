
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: 1,
    title: 'Epic Soundscape',
    thumbnail: '/projects/soundscape-thumb.jpg',
    link: '/sounds/epic-soundscape',
  },
  {
    id: 2,
    title: 'Brand Identity Redesign',
    thumbnail: '/projects/brand-redesign-thumb.jpg',
    link: '/projects/brand-identity-redesign',
  },
  {
    id: 3,
    title: 'Ambient Audio Pack',
    thumbnail: '/projects/ambient-audio-pack-thumb.jpg',
    link: '/sounds/ambient-audio-pack',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center text-warning mb-4">Featured Projects Preview</h2>
      <Carousel fade interval={4000} controls indicators>
        {featuredProjects.map(({ id, title, thumbnail, link }) => (
          <Carousel.Item key={id}>
            <Link to={link} aria-label={`View details of ${title}`}>
              <img
                className="d-block w-100 rounded"
                src={thumbnail}
                alt={`${title} thumbnail`}
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h5 className="bg-dark bg-opacity-50 px-3 py-2 rounded">{title}</h5>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedProjects;
