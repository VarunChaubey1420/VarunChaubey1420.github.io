import branding from "../data/branding";
import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img
        src={branding.logo}
        alt={branding.name}
        className="loading-logo"
      />
      <h1>{branding.name}</h1>
      <p>{branding.tagline}</p>
    </div>
  );
}

export default LoadingScreen;