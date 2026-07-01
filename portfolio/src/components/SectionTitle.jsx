import "./SectionTitle.css";

function SectionTitle({ label, title, description }) {
  return (
    <div className="section-title">

      <span className="section-label">
        {label}
      </span>

      <h2>
        {title}
      </h2>

      <p>
        {description}
      </p>

    </div>
  );
}

export default SectionTitle;