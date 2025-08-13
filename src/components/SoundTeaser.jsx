import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../styles/SoundTeaser.css';

const soundSnippets = [
  {
    id: 1,
    title: 'Ambient Atmosphere',
    file: '/sounds/sound1.mp3',
  },
  {
    id: 2,
    title: 'Cinematic Hit',
    file: '/sounds/sound2.mp3',
  },
  {
    id: 3,
    title: 'Sci-Fi',
    file: '/sounds/sound3.mp3',
  },
  {
    id: 4,
    title: 'Gaming',
    file: '/sounds/sound1.mp3',
  },
];

const SoundTeaser = () => {
  return (
    <section className="sound-teaser-section">
      <h2 className="sound-teaser-title">Sound Snippets</h2>

      <div className="snippet-grid">
        {soundSnippets.map(({ id, title, file }) => (


          <div className="snippet-card" key={id}>
            <h5 className="snippet-title">{title}</h5>
            <AudioPlayer
              src={file}
              showJumpControls={false}  
              showDownloadProgress={true}  
              layout="horizontal"  
              customAdditionalControls={[]}  // no extra buttons
              customVolumeControls={[]}  // hide volume if you want (optional)
              className="simple-audio-player"
            />
          </div>


        ))}
      </div>

      <div className="explore-wrapper">
        <Link to="/sounds" className="explore-button">
          Explore More Sounds →
        </Link>
      </div>
    </section>
  );
};

export default SoundTeaser;
