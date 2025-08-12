import React, {useEffect, useRef} from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
    /* const audioRef = useRef(null);*/
/*
  useEffect(() => {
    // Preload audio once
    audioRef.current = new Audio('/sounds/hover.mp3');
    audioRef.current.volume = 0.8;
  }, []);

  const playHoverSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // rewind to start for repeated plays
      audioRef.current.play();
    }
  };*/
    return (
        <section className="hero-container">
            <div className="hero-background-graphic">
                <img src="/graphics/utopia-stack2.png" alt="Utopia Circles" className="img-1" />
                <img src="/graphics/utopia-stack.png" alt="Utopia Circles" className="img-2" />
                <img src="/graphics/utopia-stack.png" alt="Utopia Circles" className="img-3" />
            </div>
            <div className="hero-content">
                <h1 className="hero-title">Crafting Immersive Sounds & Stunning Visuals</h1>
                <p className="hero-subtitle">
                    Utopia Studio specializes in sound design and graphic design that brings your projects to life.
                </p>
                <a href="/projects" className="hero-btn" /*onMouseEnter={playHoverSound}*/>
                Explore Our Work
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
