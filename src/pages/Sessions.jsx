const LINKS = {
  bethel: "https://www.signupgenius.com/go/10C0E4DA9AD2BABFBC43-60415528-learn",
  makerspace: "https://www.signupgenius.com/go/10C0E4DA9AD2BABFBC43-60165356-learn",
};

function SessionCard({ title, desc, href }) {
  return (
    <div className="card">
      <div className="icon-bubble">📅</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
        <a className="btn btn-primary" href={href} target="_blank" rel="noreferrer">
          Sign Up
        </a>
      </div>
      <div style={{ marginTop: 10, color: "var(--muted)", fontSize: 13 }}>
        2 sessions. 12 spots each. Beginner-friendly: Ages 10-16.
      </div>
    </div>
  );
}

export default function Sessions() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Sessions</h2>
            <p>Choose a location to reserve your spot. Dates and times are listed in each signup link.</p>
          </div>

          <div className="cards-3">
            <SessionCard
              title="Bethel Methodist Church Workshops"
              desc="Hands on sessions covering sewing basics and simple repairs."
              href={LINKS.bethel}
            />
            <SessionCard
              title="Central Library Makerspace Workshops"
              desc="Hands on sessions in a makerspace environment with guided instruction."
              href={LINKS.makerspace}
            />
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-title">
            <h2>What to Expect</h2>
            <p>Quick details so you know what you are walking into.</p>
          </div>

          <div className="cards-3">
            <div className="card">
              <div className="icon-bubble">👋</div>
              <h3>Beginner-friendly</h3>
              <p>No experience needed. Step-by-step guidance.</p>
            </div>
            <div className="card">
              <div className="icon-bubble">🧵</div>
              <h3>Core Skills</h3>
              <p>Buttons, patches, and machine basics.</p>
            </div>
            <div className="card">
              <div className="icon-bubble">🛏</div>
              <h3>Main Project</h3>
              <p>Pillowcase project from start to finish.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
