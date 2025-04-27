import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/genres" style={styles.navLink}>Genres</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/books" style={styles.navLink}>Books</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/users" style={styles.navLink}>Users</Link>
          </li>
        </ul>
      </nav>
    )
}

const styles = {
    navbar: {
      backgroundColor: '#333',
      padding: '10px 20px',
    },
    navList: {
      listStyleType: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    },
    navItem: {
      marginRight: '20px',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
    }
  };

export default Navbar
