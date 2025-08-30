import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const skills = [
  { title: "Python", desc: "Efficient scripting and backend logic." },
  { title: "Django And Flask", desc: "Robust backend web framework." },
  { title: "React.js", desc: "Modern frontend JavaScript library." },
  { title: "HTML, CSS, JS", desc: "Strong foundation for UI building." },
  { title: "MySQL", desc: "RDBMS with strong query skills." },
  { title: "Git & GitHub", desc: "Version control and collaboration." }
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="about-container ">
      <div className="about-content">
        <h2 className="about-title" data-aos="fade-down">About Me</h2>
        <p className="about-text" data-aos="fade-up">
          Hello! I'm <span className="highlight">Ajay Gaikwad</span>, a certified Python Full Stack Developer from Software Teck.
          Passionate about building scalable, user-friendly applications with modern technologies.
        </p>

        <h3 className="about-subtitle" data-aos="fade-right">Skills & Technologies</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className={`skill-card card-${index + 1}`}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <h4>{skill.title}</h4>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
