import React from "react";
import '../styles/HomePage.css'
import HeroSection from "../components/HeroSection.jsx";
import Services from '../components/Services.jsx';
import FeaturedProjects from "../components/FeaturedProjects.jsx";


const HomePage = () => {
    return (

        <div className="homepage-container">
            <HeroSection />
            <Services />
            <FeaturedProjects />

           
        </div>
    )
}

export default HomePage;