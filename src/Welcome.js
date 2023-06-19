import React, { useState } from 'react';
import styles from './Welcome.module.css';
import welcomeImage from './assets/welcome-image.jpg';

const Welcome = () => {
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  const toggleWelcomeText = () => {
    setShowWelcomeText(!showWelcomeText);
  };

  return (
    <div className={styles.welcomeContainer}>
      <img src={welcomeImage} alt="Welcome" className={styles.welcomeImage} />
      <h1 className={styles.welcomeHeading}>Welcome to Our PWA Application!</h1>
      {showWelcomeText && (
        <p className={styles.welcomeText}>
          Enjoy the functionality and convenience of our progressive web app.
        </p>
      )}
      <div className={styles.buttonContainer}>
        <button onClick={toggleWelcomeText}>
          {showWelcomeText ? 'Close Welcome Text' : 'Open Welcome Text'}
        </button>
      </div>
    </div>
  );
};

export default Welcome;
