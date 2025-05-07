import React from 'react';
import styles from './banner.module.css';
import bannerImage from '../../assets/images/image1.jpg';

const Banner = () => {
  return (
    <section
      className={`${styles.banner} `}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className={styles.textBox}>
        <h1 className={styles.text}>From Memory to Meaning</h1>
      </div>
    </section>
  );
};

export default Banner;
