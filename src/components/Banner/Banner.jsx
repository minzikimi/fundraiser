import React from 'react';
import styles from './banner.module.css';
import bannerImage from '../../assets/images/image2.jpg';

const Banner = () => {
  return (
    <section
      className={`${styles.banner} `}
      // style={{ backgroundImage: `url(${bannerImage})` }}
    >
       <img src={bannerImage} alt="Banner" className={styles.fullImage} />
      <div className={styles.textBox}>
        <h1 className={styles.text}>FROM MEMORY TO MEANING</h1>
      </div>
    </section>
  );
};

export default Banner;
