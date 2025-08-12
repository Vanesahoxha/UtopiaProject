import React, { useState, useEffect } from "react";
import "../styles/Projects.css"



const projects = [
  {id:1, image: "/projects/project1.jpg", title: "Project 1" },
  {id:2, image: "/projects/project2.jpg", title: "Project 2" },
  {id:3, image: "/projects/project3.jpg", title: "Project 3" },
  {id:4, image: "/projects/project4.jpg", title: "Project 4" },
  {id:5, image: "/projects/project2.jpg", title: "Project 2" },
  {id:6, image: "/projects/project3.jpg", title: "Project 3" },
];

function ProjectsPage () {
const [lightboxOpen, setLightboxOpen] = useState(false);
const [activeIndex, setActiveIndex] = useState(0);

const openLightbox = (index) =>{
  setActiveIndex(index);
  setLightboxOpen(true);
  document.body.style.overflow="hidden";//no bg scroll
};
 
const closeLightbox= () =>{
  setLightboxOpen(false);
  document.body.style.overflow = ""; //restore scrolling
}
const showNext = (e) =>{
  e?.stopPropagation();
  setActiveIndex((i) => (i + 1 )% projects.length);
};
const showPrev = (e) => {
  e?.stopPropagation();
  setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
};

//esc to close, ->, <- to navigate
useEffect(()=>{
  if(!lightboxOpen) return;
  const onKey = (e) => {
    if (e.key === "Escape") closeLightbox();
    if(e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + projects.length)% projects.length);
    if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % projects.length);
  
  };
window.addEventListener("keydown", onKey);
return() =>window.removeEventListener("keydown", onKey);
},
[lightboxOpen]
);

 return (
  <div className="projects-container">
    <h1 className="projects-title">Our Projects</h1>

    <div className="projects-grid">
      {projects.map((project, idx)=>(
        <button
        key={project.id}
        className="project-card"
        onClick={()=>openLightbox(idx)}
        aria-label={`Open ${project.title}`}
        >
      <img src={project.image} alt={project.title} />
            <div className="project-overlay">{project.title}</div>
        </button>
       
      ))}
    </div>


    {lightboxOpen && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              ×
            </button>

            <button className="lightbox-prev" onClick={showPrev} aria-label="Previous image">
              ‹
            </button>

            <div className="lightbox-image-wrap">
              <img
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                className="lightbox-image"
              />
              <div className="lightbox-caption">{projects[activeIndex].title}</div>
            </div>

            <button className="lightbox-next" onClick={showNext} aria-label="Next image">
              ›
            </button>
          </div>
      </div>
    )}
  </div>
 );
}

export default ProjectsPage;
