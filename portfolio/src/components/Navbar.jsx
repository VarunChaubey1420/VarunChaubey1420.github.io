import "./Navbar.css";
import branding from "../data/branding";
import navigation from "../constants/navigation";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          <img
            src={branding.logo}
            alt={branding.name}
          />
        </a>
        <nav>
          <ul>
            {navigation.map((item) => (
              <li key={item.title}>
                <a href={item.href}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="resume-btn">
          Resume ↗
        </button>
      </div>
    </header>
  );
}

export default Navbar;