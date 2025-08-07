import React from "react";
import '../styles/HomePage.css'
import HeroSection from "../components/HeroSection.jsx";
import Services from '../components/Services.jsx';
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import SoundTeaser from "../components/SoundTeaser.jsx";
import ClientTestimonials from "../components/ClientTestimonials.jsx";
import CallToAction from "../components/CallToAction.jsx";

const HomePage = () => {
    return (

        <div className="homepage-container">
            <HeroSection />
            <Services />
            <FeaturedProjects />
            <SoundTeaser />
            <ClientTestimonials />
            <CallToAction />
         

           
        </div>
    )
}

export default HomePage;