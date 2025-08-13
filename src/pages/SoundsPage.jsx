import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "../styles/Sounds.css";

const sounds = [
  { id: 1, title: "Description", file: "/sounds/sound1.mp3" },
  { id: 2, title: "Description", file: "/sounds/sound2.mp3" },
  { id: 3, title: "Description", file: "/sounds/sound3.mp3" },
];

function SoundsPage() {
  const [currentSound, setCurrentSound] = useState(null);
  const waveRefs = useRef({});
  const waveSurfers = useRef({});

  useEffect(() => {
    sounds.forEach((sound) => {
      if (waveSurfers.current[sound.id]) return; // prevent duplicates
      const container = waveRefs.current[sound.id];
      if (!container) return;

      const ws = WaveSurfer.create({
        container,
        waveColor: "#ccc",
        progressColor: "#ff9100",
        height: 50,
        responsive: true,
        cursorWidth: 1,
        barWidth: 2,
      });

      ws.load(sound.file);

      ws.on("ready", () => {
        waveSurfers.current[sound.id] = ws;
      });

      ws.on("finish", () => setCurrentSound(null));
    });

    return () => {
      Object.values(waveSurfers.current).forEach((ws) => ws?.destroy());
    };
  }, []);

  const togglePlay = (id) => {
    if (currentSound === id) {
      waveSurfers.current[id]?.pause();
      setCurrentSound(null);
    } else {
      Object.values(waveSurfers.current).forEach((ws) => ws?.pause());
      waveSurfers.current[id]?.play();
      setCurrentSound(id);
    }
  };

  return (
    <div className="sounds-container">
      <h1 className="sounds-title">Sounds</h1>
      <ul className="sounds-list">
        {sounds.map((sound) => (
          <li key={sound.id} className="sound-item">
            <button
  className={`sound-play-btn ${currentSound === sound.id ? "playing" : ""}`}
  onClick={() => togglePlay(sound.id)}
  aria-label={currentSound === sound.id ? "Pause" : "Play"}
>
  {currentSound === sound.id ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
      <rect x="5" y="4" width="4" height="16" rx="1"/>
      <rect x="15" y="4" width="4" height="16" rx="1"/>
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  )}
</button>


            <span className="sound-title">{sound.title}</span>
            <div
              className="waveform"
              ref={(el) => (waveRefs.current[sound.id] = el)}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SoundsPage;
