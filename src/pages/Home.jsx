import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1>Small Steps, Big Skills</h1>
              <div className="kicker">A Learn to Sew Initiative</div>

              <p>
                Empowering Gen Z and beyond with practical life skills through hands on sewing workshops and simple video
                tutorials. Learn to repair, create, and build confidence one stitch at a time.
              </p>

              <div className="hero-actions">
                <Link to="/sessions" className="btn btn-primary">
                  Claim My Spot in a Workshop
                </Link>
                <Link to="/tutorials" className="btn">
                  Watch Free Tutorials <span className="btn-icon" aria-hidden="true" />
                </Link>
              </div>

            </div>

            <div className="hero-media">
              <img src="/hero.jpg"/>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="section band">
        <div className="container">
          <div className="section-title">
            <h2>Why Sewing Skills Matter</h2>
            <p>
              In a world of fast fashion and disposable goods, basic repair skills have become a lost art. We are here to
              change that.
            </p>
          </div>

          <div className="cards-3">
            <div className="card">
              <div className="icon-bubble">$</div>
              <h3>Save Money</h3>
              <p>Repair instead of replace. Simple fixes like sewing on a button or patching a hole can extend the life of clothes.</p>
            </div>

            <div className="card">
              <div className="icon-bubble">♻</div>
              <h3>Reduce Waste</h3>
              <p>Learning to repair and maintain clothing helps reduce textile waste and supports sustainability.</p>
            </div>

            <div className="card">
              <div className="icon-bubble">★</div>
              <h3>Build Confidence</h3>
              <p>Practical life skills create independence. Learn to solve problems with your hands and feel accomplished.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>What You&apos;ll Learn</h2>
            <p>Each workshop and tutorial covers essential skills that anyone can master, regardless of experience level.</p>
          </div>

          <div className="learn-grid">
            <div className="learn-card">
              <div className="learn-icon">⚙</div>
              <div>
                <h3>Sewing Machine Basics</h3>
                <p>Learn how to thread, operate, and troubleshoot a sewing machine with confidence.</p>
              </div>
            </div>

            <div className="learn-card">
              <div className="learn-icon">●</div>
              <div>
                <h3>Sewing on a Button</h3>
                <p>Master this essential skill and never throw away a favorite item again.</p>
              </div>
            </div>

            <div className="learn-card">
              <div className="learn-icon">▦</div>
              <div>
                <h3>Patching a Hole</h3>
                <p>Fix tears and holes in clothing to extend their life and add unique character.</p>
              </div>
            </div>

            <div className="learn-card">
              <div className="learn-icon">🔖</div>
              <div>
                <h3>Fabric Bookmark</h3>
                <p>Create a simple, practical project while practicing basic sewing techniques.</p>
              </div>
            </div>

            <div className="learn-card learn-wide">
              <div className="learn-icon">🛏</div>
              <div>
                <h3>Pillowcase Project</h3>
                <p>Complete a full beginner sewing project from start to finish and take home something you made yourself.</p>
              </div>
            </div>
          </div>

          <div className="photo-row">
            <img src="/learn1.jpg" />
            <img src="/learn2.jpg" alt="Hand stitching a patch" />
          </div>
        </div>
      </section>

      {/* WHERE WE MEET */}
      <section className="section band">
        <div className="container">
          <div className="section-title">
            <h2>Where We Meet</h2>
            <p>Sessions are held at welcoming community locations. Each location offers a supportive environment for learning.</p>
          </div>

          <div className="cards-3">
            <div className="card">
              <div className="icon-bubble">🏛</div>
              <h3>Central Library Makerspace, Gainesville VA</h3>
              <p>A creative community space equipped with tools and resources for hands on learning and making.</p>
              <div style={{ marginTop: 12 }}>
                <Link to="/sessions" className="btn">View Sessions</Link>
              </div>
            </div>

            <div className="card">
              <div className="icon-bubble">👥</div>
              <h3>Linton Hall 4H Club, Gainesville VA</h3>
              <p>A youth development organization focused on practical skills, leadership, and community service.</p>
              <div style={{ marginTop: 12 }}>
                <Link to="/sessions" className="btn">View Sessions</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* READY CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <img src="/cta.jpg" alt="Fabric and sewing tools on a table" />

            <div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)", marginBottom: 10 }}>
                Ready to Get Started?
              </h2>
              <p style={{ color: "var(--muted)" }}>
                Whether you prefer hands on learning in workshops or following along with video tutorials at your own pace,
                we created resources designed for beginners.
              </p>

              <div className="checks">
                <div className="check">
                  <span className="dot" aria-hidden="true" />
                  Beginner-friendly: No experience necessary
                </div>
                <div className="check">
                  <span className="dot" aria-hidden="true" />
                  Small groups: Just 12 spots per session
                </div>
                <div className="check">
                  <span className="dot" aria-hidden="true" />
                  Free resources: Access video tutorials anytime
                </div>
              </div>

              <div className="hero-actions" style={{ marginTop: 18 }}>
                <Link to="/sessions" className="btn btn-primary">Sign Up for a Session</Link>
                <Link to="/tutorials" className="btn">Explore Tutorials</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
