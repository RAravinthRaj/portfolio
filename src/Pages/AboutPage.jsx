import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import About from '../Components/About'
 
const AboutPage = () => {
    const mainAboutData="My name is Aravinth Raj, and I am currently pursuing my Bachelor's degree at National Engineering College, specializing in web development. My passion for technology drives me to constantly explore, learn, and innovate in the dynamic field of web development. I have a natural curiosity and an eagerness to embrace new challenges, which fuels my ability to grasp concepts quickly and apply them effectively in real-world scenarios.I am highly motivated and thrive in solving problems creatively, always seeking innovative solutions to enhance user experiences. Beyond my technical skills, I bring strong coordination and leadership qualities to any team. I excel at organizing and guiding collaborative efforts, ensuring that projects are completed efficiently and effectively. My ability to work seamlessly within a team, coupled with my dedication to achieving impactful results, makes me a reliable and valuable contributor.My ultimate goal is to design and develop user-centric solutions that not only meet client needs but also create a meaningful impact. I am committed to continuous learning and skill development, always staying abreast of emerging technologies and industry trends. Through hard work and dedication, I aim to establish myself as a proficient and innovative professional in the field of web development."
    return (
        <div>
            <Navbar />
            <Hero />
            <About story={mainAboutData}/>
            <Footer />
        </div>
    );
}

 
export default AboutPage;