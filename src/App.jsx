import React from 'react';

export default function App() {
  return (
    <main className="page">
      <div className="container">
        <header className="hero">
          <div className="badge">Welcome</div>
          <h1 className="title">
            Come <span className="accent">On</span> Board
          </h1>
          <p className="subtitle">
            A clean, responsive landing page that looks great on mobile and desktop.
          </p>
          <div className="ctaRow">
            <a className="ctaPrimary" href="#get-started" aria-label="Get started">Get started</a>
            <a className="ctaSecondary" href="#learn-more" aria-label="Learn more">Learn more</a>
          </div>
        </header>

        <section id="learn-more" className="features">
          <div className="featureCard">
            <h3>Fast setup</h3>
            <p>Vite + React for instant dev and quick builds.</p>
          </div>
          <div className="featureCard">
            <h3>Responsive first</h3>
            <p>Optimized layout, spacing, and typography for any screen.</p>
          </div>
          <div className="featureCard">
            <h3>Accessible</h3>
            <p>Color contrast, semantic HTML, and focus states built-in.</p>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} First Vibe</span>
        </footer>
      </div>
    </main>
  );
}

