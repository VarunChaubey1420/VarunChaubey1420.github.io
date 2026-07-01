import "./Hero.css";
import branding from "../data/branding";
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left">
         <div className="hero-status">
          <span className="status-dot"></span>
          <span>
            Currently Building <strong>CampusCore</strong>
          </span>
        </div>
          <h1>
            Building <br />
            Digital <br />
            Experiences.
          </h1>
          <p className="hero-description">
            Computer Science student passionate about building modern web applications,
            interactive experiences, and digital products that people genuinely enjoy using.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Projects
            </a>
            <a href="#" className="secondary-btn">
              Resume ↗
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img
            src={branding.logo}
            alt={branding.name}
            className="hero-logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;