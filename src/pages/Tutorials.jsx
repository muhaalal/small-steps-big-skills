import React from 'react';

function TutorialCard({ title, desc, videoUrl }) {
  // This helper converts a standard YouTube link into an embed link
  const getEmbedUrl = (url) => {
    if (!url) return null;
    try {
      // Handles standard links (youtube.com/watch?v=ID) and short links (youtu.be/ID)
      const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}`;
    } catch (e) {
      return null;
    }
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div style={{ marginTop: 14 }} className="card">
      <div className="icon-bubble">▶</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div style={{ 
        marginTop: 14, 
        height: 190, 
        borderRadius: 14, 
        border: "1px solid var(--border)", 
        background: "#000", 
        overflow: "hidden", 
        display: "flex" 
      }}>
        {embedUrl ? (
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div style={{ margin: "auto", color: "var(--muted)", fontWeight: 800 }}>
            Video coming soon
          </div>
        )}
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
            <TutorialCard 
              title="Sewing Machine Basics" 
              desc="Parts, safety, threading, and how to start." 
              videoUrl="https://www.youtube.com/watch?v=6nVzZs5AkVg&feature=youtu.be" 
            />
            <TutorialCard 
              title="Sewing on a Button" 
              desc="A quick repair skill that saves clothes." 
              videoUrl="https://www.youtube.com/watch?v=-TgL8gg8yZ0&feature=youtu.be"
            />
            <TutorialCard 
              title="Patching a Hole" 
              desc="Simple methods for common wear and tear." 
              videoUrl="https://www.youtube.com/watch?v=6jI8NYMx-HI&feature=youtu.be"
            />
            <TutorialCard 
              title="Fabric Bookmark" 
              desc="A small project to practice basic techniques." 
              videoUrl="https://www.youtube.com/watch?v=0wSoa_lbLIk&feature=youtu.be"
            />
            <TutorialCard 
              title="Pillowcase Project" 
              desc="Main project from the sessions, start to finish." 
              videoUrl="https://www.youtube.com/watch?v=0wSoa_lbLIk&feature=youtu.be"
            />
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