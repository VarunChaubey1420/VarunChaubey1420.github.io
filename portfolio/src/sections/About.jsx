import "./About.css";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionTitle
          label="About"
          title="Who I Am"
          description="A little about me and the passion that drives me to build modern digital experiences."
        />
        <div className="about-content">
          <div className="about-image">
            PHOTO
          </div>
          <div className="about-text">
            <h3>
              Hi, I'm Varun 👋
            </h3>
            <p>
              Computer Science student passionate about building modern web
              applications, interactive experiences, and meaningful digital
              products.
            </p>
            <p>
              I enjoy transforming ideas into polished user experiences—from
              student platforms and weather apps to browser games and creative
              web interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;