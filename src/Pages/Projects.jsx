import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63EA103X5Deded8Ss9L1efVvReZb_nl7iVw&s",
      heading: "Portfolio",
      language: "React JS | Tailwind CSS",
      oneline: "A portal to highlights my skills, projects, and achievements.",
      description:
        " A portfolio is a curated collection of work samples, skills, and accomplishments that demonstrates your expertise, creativity, and professional growth, often tailored to showcase your value in a specific field or industry.",
      path: "https://github.com/RAravinthRaj/pg-life",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      heading: "PG Life",
      language: "JS | SQL | PHP",
      oneline:
        "A platform to simplify the search for paying guest accommodations.",
      description:
        "PG Finder is a web application designed to help users locate and book paying guest accommodations effortlessly, providing detailed listings, amenities, pricing, and location-based filtering.",
      path: "https://github.com/RAravinthRaj/pg-life",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCulR8zOUFaeuhyBaYIY834ZWkNS0wicofQ&s",
      heading: "Airline Passenger and Luggage Management System",
      language: "c++",
      oneline:
        "A system to manage airline passengers and flight operations efficiently.",
      description:
        "An Airline Passenger Management System streamlines passenger booking, flight schedules, and customer data management while enhancing operational efficiency and user experience for airlines and passengers.",
      path: "https://github.com/RAravinthRaj?tab=repositories",
    },
  ];
  return (
    <div>
      <Navbar />
      {data.map((d) => (
        <ProjectCard
          i={d.image}
          h={d.heading}
          o={d.oneline}
          dese={d.description}
          l={d.language}
          li={d.path}
        />
      ))}
      <Footer />
    </div>
  );
};

Projects.propTypes = {};

export default Projects;