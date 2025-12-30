import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ minWidth: "unset" }}>
              <img src="/logo.png" alt="Small Steps, Big Skills logo" />
              <div className="brand-text">
                <div className="brand-title" style={{ color: "white" }}>Small Steps, Big Skills</div>
                <div className="brand-sub">A Learn to Sew Initiative</div>
              </div>
            </div>
            <p>
              A Girl Scouts Gold Award project empowering individuals with practical sewing skills through hands on
              workshops and accessible video tutorials.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div style={{ display: "grid", gap: 8 }}>
              <Link to="/">Home</Link>
              <Link to="/about">About the Project</Link>
              <Link to="/sessions">Sessions</Link>
              <Link to="/tutorials">Tutorials</Link>
            </div>
          </div>

          <div>
            <h4>Get Involved</h4>
            <div style={{ display: "grid", gap: 8 }}>
              <Link to="/sessions">Sign Up for a Workshop</Link>
              <Link to="/tutorials">Watch Tutorials</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Small Steps, Big Skills. A Girl Scouts Gold Award initiative.
        </div>
      </div>
    </footer>
  );
}
