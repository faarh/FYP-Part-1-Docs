import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      backgroundColor: '#333',
      color: 'white',
      padding: '15px',
      width: '100%',
      textAlign: 'center',
      position: 'relative',
    },
    logo: {
      display: 'inline-block',
    },
    authLinks: {
      position: 'absolute',
      top: '50%',
      right: '15px',
      transform: 'translateY(-50%)',
    },
    authLink: {
      color: 'white',
      marginLeft: '10px',
      textDecoration: 'none',
    },
    categories: {
      backgroundColor: '#f0f0f0',
      padding: '10px',
      textAlign: 'center',
    },
    categoryList: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
    categoryItem: {
      display: 'inline-block',
      marginRight: '20px',
    },
    featuredArtworks: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '20px',
    },
    artwork: {
      marginBottom: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out',
    },
    artworkHover: {
      transform: 'scale(1.05)',
    },
    artworkImg: {
      width: '100%',
      height: 'auto',
      borderBottom: '1px solid #ddd',
    },
    artworkDescription: {
      padding: '10px',
    },
    footer: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      bottom: '0',
      width: '100%',
    },
  };

  return (
    <div style={styles.body} className="home-page">
      {/* Header Section */}
      <header style={styles.header} className="header">
        <div style={styles.logo} className="logo">
          {/* Your Logo Image */}
          <img src="logo.png" alt="Logo" />
        </div>
        <div style={styles.authLinks} className="auth-links">
          <Link to="/login" style={styles.authLink}>Login</Link>
          <Link to="/register" style={styles.authLink}>Sign Up</Link>
        </div>
      </header>

      {/* Categories Section */}
      <nav style={styles.categories} className="categories">
        <ul style={styles.categoryList}>
          <li style={styles.categoryItem}><Link to="/category1">Gallery</Link></li>
          <li style={styles.categoryItem}><Link to="/category2">Poppular Artworks</Link></li>
          <li style={styles.categoryItem}><Link to="/category3">Sell</Link></li>
          <li style={styles.categoryItem}><Link to="/category2">Buy</Link></li>
          <li style={styles.categoryItem}><Link to="/category2">Top Artist</Link></li>
          <li style={styles.categoryItem}><Link to="/category2">Customize Artwork</Link></li>
          <li style={styles.categoryItem}><Link to="/category2">Contact</Link></li>
          {/* Add more categories as needed */}
        </ul>
      </nav>

      {/* Featured Artworks Section */}
      <section style={styles.featuredArtworks} className="featured-artworks">
        <div style={styles.artwork} className="artwork">
          <img style={styles.artworkImg} src="artwork1.jpg" alt="Artwork 1" />
          <div style={styles.artworkDescription} className="artwork-description">
            <h3>Artwork Title 1</h3>
            <p>Description of the artwork goes here.</p>
          </div>
        </div>

        <div style={styles.artwork} className="artwork">
          <img style={styles.artworkImg} src="artwork2.jpg" alt="Artwork 2" />
          <div style={styles.artworkDescription} className="artwork-description">
            <h3>Artwork Title 2</h3>
            <p>Description of the artwork goes here.</p>
          </div>
        </div>

        <div style={styles.artwork} className="artwork">
          <img style={styles.artworkImg} src="artwork3.jpg" alt="Artwork 3" />
          <div style={styles.artworkDescription} className="artwork-description">
            <h3>Artwork Title 3</h3>
            <p>Description of the artwork goes here.</p>
          </div>
        </div>
        {/* Add more artworks as needed */}
      </section>

      {/* Footer Section */}
      <footer style={styles.footer} className="footer">
        <p>&copy; 2023  Crafty Canvas</p>
      </footer>
    </div>
  );
};

export default HomePage;
