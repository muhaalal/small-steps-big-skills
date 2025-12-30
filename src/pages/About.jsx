export default function About() {
  return (
    <div className="page">
      <div>
        <div className="section-title">
          <h2>About the Project</h2>
          <p>
            Small Steps, Big Skills is a Girl Scouts Gold Award project focused on teaching practical sewing and repair
            skills through workshops and video tutorials.
          </p>
        </div>

        <div className="cards-3">
          <div className="card">
            <div className="icon-bubble">!</div>
            <h3>The Problem</h3>
            <p>
              Many students do not learn basic repair skills. Small clothing issues become reasons to throw items away.
            </p>
          </div>

          <div className="card">
            <div className="icon-bubble">✓</div>
            <h3>The Solution</h3>
            <p>
              Hands on sessions plus clear tutorials that make sewing approachable and useful for real life.
            </p>
          </div>
        </div>

        <div style={{margin:50}}>
          <h1>Our team</h1>
        </div>

    <div className="card" style={{ marginTop: 20, padding: 32, display: "flex", flexDirection: "column", alignItems: "center", }}>
  <img src="/allison.jpg" alt="Allison Christensen" style={{ width: 260, height: 260, borderRadius: 16,objectFit: "cover",marginBottom: 20,}} />
  <h2 style={{ marginBottom: 6 }}>Allison Christensen</h2>
  <p style={{ marginBottom: 24, color: "#6b7280", fontWeight: 500,}}>
    Founder, Small Steps Big Skills
  </p>
  <p
    style={{maxWidth: 700, textAlign: "left", lineHeight: 1.7, color: "#374151", fontSize: 16,}}>
    Allison Christensen is the founder of <strong>Small Steps, Big Skills: A Learn
    to Sew Initiative</strong>, a Girl Scouts Gold Award project focused on helping
    Gen Z and future generations build essential life skills. Recognizing that
    practical skills like sewing and clothing repair are often overlooked, Allison
    created this initiative to make hands-on learning accessible, welcoming, and
    engaging.
    <br /><br />
    Through community workshops and instructional video tutorials, Allison teaches
    foundational sewing skills that empower participants to care for their clothing,
    reduce waste, and gain confidence in creating and repairing items on their own.
    Her work brings together education, sustainability, and community involvement
    to ensure these valuable skills are passed on and preserved.
  </p>
</div>
      </div>
    </div>
  );
}
