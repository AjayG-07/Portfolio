import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Project.css';

const projects = [
  {
    title: "Job Portal",
    description: "A Django-powered job portal with dynamic dashboards, resume uploads, and AI-based job recommendations.",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    link: "http://127.0.0.1:8000/"
  },
  {
    title: "Food Ordering Website",
    description: "A full-featured food delivery website with user/admin roles, CRUD for food items, cart, and responsive UI.",
    image: "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    link: "#"
  },
  {
    title: "Online Examination Portal",
    description: "This is Best Online Examination Portal In this manage exam test",
    image: "https://plus.unsplash.com/premium_photo-1681487924146-c091598b7e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    link: "https://github.com/AjayG-07/Online-Examination-Portal"
  },
 
];

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="project" className="projects-container">
      <div className="projects-content">
        <h2 className="projects-title" data-aos="fade-up">
          My <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="flip-card" key={index} data-aos="zoom-in" data-aos-delay={index * 150}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                </div>
                <div className="flip-card-back">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Project;
