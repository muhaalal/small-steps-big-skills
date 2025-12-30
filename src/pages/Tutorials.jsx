function TutorialCard({ title, desc }) {
  return (
    <div style={{marginTop:14}}className="card">
      <div className="icon-bubble">▶</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div style={{ marginTop: 14, height: 190, borderRadius: 14, border: "1px solid var(--border)", background: "#f3f4f6", display: "grid", placeItems: "center", color: "var(--muted)", fontWeight: 800 }}>
        Video embed goes here
      </div>
    </div>
  );
}

export default function Tutorials() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Tutorials</h2>
            <p>Short videos covering the exact skills taught in the workshops. Start here if you are brand new.</p>
          </div>

          <div className="cards-2">
            <TutorialCard title="Sewing Machine Basics" desc="Parts, safety, threading, and how to start." />
            <TutorialCard title="Sewing on a Button" desc="A quick repair skill that saves clothes." />
            <TutorialCard title="Patching a Hole" desc="Simple methods for common wear and tear." />
            <TutorialCard title="Fabric Bookmark" desc="A small project to practice basic techniques." />
            <TutorialCard title="Pillowcase Project" desc="Main project from the sessions, start to finish." />
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="cta">
            <img src="/cta.jpg" alt="Sewing tools and fabric" />
            <div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)", marginBottom: 10 }}>Want hands on help?</h2>
              <p style={{ color: "var(--muted)" }}>
                Sign up for a workshop for guided practice and support.
              </p>
              <div className="hero-actions" style={{ marginTop: 18 }}>
                <a className="btn btn-primary" href="/sessions">View Sessions</a>
                <a className="btn" href="/about">About the Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
