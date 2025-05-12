import React from 'react';
import styles from './Banner.module.css';
import bannerImage from '../../assets/images/image2.jpg';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation(); //translation hook

  return (
    <section
      className={`${styles.banner} `}>
       <img src={bannerImage} alt="Banner" className={styles.fullImage} />
      <div className={styles.textBox}>
       <h1 className={styles.text}>{t('banner.title')}</h1> 
      </div>
    </section>
  );
};

export default Banner;
