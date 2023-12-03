import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.mainContainer} >
      <div className={styles.container} >
        <div>
          <h4>APP LOGO</h4>
        </div>
        <div className={styles.rightContainer}>
          <Link to="/">
            DASHBOARDS
          </Link>
          <Link to="/createads">
            CREATE ADS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;