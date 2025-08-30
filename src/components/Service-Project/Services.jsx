import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

const services = [
  {
    title: "Python Developer",
    description: "Building clean and efficient Python scripts, backend logic, and automation tools.",
    icon: "🐍"
  },
  {
    title: "Web Developer",
    description: "Designing responsive and modern websites using HTML, CSS, JavaScript, and React.js.",
    icon: "🌐"
  },
  {
    title: "Backend Developer",
    description: "Creating robust backend systems with Django/Flask, building APIs, and working with databases.",
    icon: "🧠"
  },
  {
    title: "Full Stack Developer",
    description: "End-to-end development including frontend, backend, and deployment using modern technologies.",
    icon: "💼"
  }
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="services" className="services-container">
      <div className="services-content">
        <h2 className="services-title" data-aos="fade-up">My <span>Services</span></h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="flip-up"
              data-aos-delay={index * 150}
            >
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
