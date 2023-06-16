import React from 'react';
import styles from './Welcome.module.css';
import welcomeImage from './assets/welcome-image.jpg';

const Welcome = () => {
  return (
    <div className={styles.welcomeContainer}>
      <img src={welcomeImage} alt="Welcome" className={styles.welcomeImage} />
      <h1 className={styles.welcomeHeading}>Welcome to Our PWA Application!</h1>
      <p className={styles.welcomeText}>
        Enjoy the functionality and convenience of our progressive web app.
      </p>
    </div>
  );
};

export default Welcome;
