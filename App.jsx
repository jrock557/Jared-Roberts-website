import React from 'react';
import './index.css';

const App = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <header style={{
        background: 'url("/background.jpg") center/cover no-repeat',
        color: 'white',
        padding: '100px 20px'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Jared Roberts</h1>
        <h2 style={{ fontWeight: 'normal' }}>Musician</h2>
      </header>

      <section style={{ padding: '40px 20px' }}>
        <h2>About Me</h2>
        <p style={{ maxWidth: '600px', margin: 'auto' }}>
          Jared has been immersed in music from an early age, starting his journey as a musician at just two years old.
          Throughout middle and high school, he distinguished himself by earning numerous music awards and accolades in
          band programs, showcasing his dedication and talent. Currently, Jared serves on staff at Second Chance Church
          with worship and creative departments. Jared combines his musical expertise with a heart for ministry,
          supporting worship initiatives and enhancing the church's music programs. Jared’s lifelong commitment to music
          and his faith, continues to inspire and support those around him.
        </p>
      </section>

      <section style={{ padding: '40px 20px', backgroundColor: '#eee' }}>
        <h2>Music Services</h2>
        <p>Jared is available for recording for you. If you need a piano track, piano and/or keyboards added to your
        soundtrack or a fully arranged soundtrack, custom arranged for you, he's your musician.</p>
        <p>Overdubs per song start at <strong>$100</strong></p>
        <p>Fully arranged soundtracks start at <strong>$250</strong></p>
      </section>

      <section style={{ padding: '40px 20px' }}>
        <h2>Contact</h2>
        <form action="mailto:jaredroberts126@gmail.com" method="POST" encType="text/plain" style={{ maxWidth: '600px', margin: 'auto', display: 'grid', gap: '10px' }}>
          <input type="text" name="First Name" placeholder="First Name" required />
          <input type="text" name="Last Name" placeholder="Last Name" required />
          <input type="tel" name="Phone Number" placeholder="Phone Number" required />
          <input type="email" name="Email" placeholder="Email" required />
          <textarea name="Message" placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#222', color: '#fff' }}>
        <p>Follow me on <a href="https://www.instagram.com/_jaredroberts/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      </footer>
    </div>
  );
};

export default App;
