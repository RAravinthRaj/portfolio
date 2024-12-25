import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Service from "../Components/Services";

const SkillsPage = () => {
  const mainSkillsData = [
    {
      image:
        "https://img.freepik.com/free-vector/art-studio-abstract-concept-vector-illustration-painting-lesson-adults-children-open-fine-art-class-modern-gallery-pottery-workshop-creative-space-drawing-studio-abstract-metaphor_335657-5916.jpg?uid=R179986147&ga=GA1.1.1394042227.1734682082&semt=ais_hybrid",
      heading: "Web Designer",
      description:
        "A passionate web designer focused on creating visually appealingand user-friendly websites. With a strong eye for detail and creativity, I aim to craft designs that balance aesthetics and functionality, delivering impactful digital experiences.",
    },
    {
      image:
        "https://img.freepik.com/free-vector/kids-studying-from-home_23-2148659420.jpg?uid=R179986147&ga=GA1.1.1394042227.1734682082&semt=ais_hybrid",
      heading: "Front End Developer",
      description:
        "A dedicated front-end developer with a passion for building responsive and user-friendly web interfaces. Skilled in combining creativity and technical expertise to deliver seamless digital experiences with clean and efficient code.",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/vector-illustration-man-with-beard-glasses-working-laptop-online-support-concept_1142-120883.jpg?uid=R179986147&ga=GA1.1.1394042227.1734682082&semt=ais_hybrid",
      heading: "Problem Solving",
      description:
        "A skilled problem solver with a robust foundation in logical thinking and analytical skills, I possess the ability to break down complex challenges into manageable components and deliver effective solutions. My expertise lies in Java programming and c++.",
    },
    {
        "image": "https://img.freepik.com/premium-vector/vector-continuous-line-people-thinking_844724-20895.jpg?uid=R179986147&ga=GA1.1.1394042227.1734682082&semt=ais_hybrid",
        "heading": "Innovative Thinking",
        "description": "An innovative thinker with a knack for tackling challenges creatively, I bring forward out-of-the-box solutions and strategic approaches to problem-solving."
    },    
    {
      image:
        "https://img.freepik.com/free-vector/big-data_23-2148033045.jpg?uid=R179986147&ga=GA1.1.1394042227.1734682082&semt=ais_hybrid",
      heading: "SQL in Database",
      description:
        "With a strong foundation in SQL and database management, I excel in designing, optimizing, and maintaining efficient data structures to support scalable solutions.",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/software-developer-doing-web-coding-line-illustration-design_203633-3700.jpg?uid=R179986147&ga=GA1.1.1394042227.1734682082&semt=ais_hybrid",
      heading: "PHP Developement",
      description:
        "Experienced in PHP development, I create dynamic, server-side applications that enhance functionality and ensure seamless user experiences.",
    },
  ];
  return (
    <div>
      <Navbar />
      <Service skill={mainSkillsData}/>
      <Footer />
    </div>
  );
};

SkillsPage.propTypes = {};

export default SkillsPage;
