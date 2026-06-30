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

            Building digital experiences that people remember.

          </p>

          <div className="hero-buttons">

            <button>

              Explore Projects

            </button>

            <button>

              Resume

            </button>

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