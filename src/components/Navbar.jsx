import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="nav">
          <Link to="/" className="brand" aria-label="Small Steps, Big Skills Home">
            <img src="/logo.png" />
            <div className="brand-text">
              <div className="brand-title">Small Steps, Big Skills</div>
              <div className="brand-sub">A Learn to Sew Initiative</div>
            </div>
          </Link>

          <div className="nav-links">
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/about">
              About the Project
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/sessions">
              Sessions
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/tutorials">
              Tutorials
            </NavLink>

            <Link className="nav-cta" to="/sessions">
              Claim My Spot in a Workshop
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
