import React from 'react';
import styles from './HowItWorks.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const sharedMotionProps = {
  variants: fadeInUp,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = t('howItWorks.steps', { returnObjects: true });

  return (
    <>
      <NavBar />
      <div
        className={styles.howItWorksContainer}
        role="main"
        aria-labelledby="how-it-works-heading"
      >
        <motion.div className={styles.content} {...sharedMotionProps}>
          <h1 className={styles.heading} id="how-it-works-heading">
            {t('howItWorks.title')}
          </h1>

          <p className={styles.intro}>
            {t('howItWorks.intro')}
          </p>

          <hr className={styles.divider} />

          {steps.map((step, i) => (
            <section className={styles.step} key={i}>
              <motion.div
                {...sharedMotionProps}
                transition={{ ...sharedMotionProps.transition, delay: 0.1 * i }}
              >
                <h2 className={styles.stepTitle}>{step.title}</h2>
                <p className={styles.stepText}>{step.text}</p>

                {step.list && (
                  <ul className={styles.stepList}>
                    {step.list.map((item, idx) => (
                      <li key={idx} className={styles.stepListItem}>{item}</li>
                    ))}
                  </ul>
                )}

                {step.email && (
                  <>
                    <a
                      className={styles.email}
                      href="mailto:info@museumforintelsen.se"
                    >
                      ✉️ info@museumforintelsen.se
                    </a>
                    <p className={styles.sampleText}>
                      Include your name, donation amount, and date if you’d like a receipt or acknowledgment.
                    </p>
                  </>
                )}
              </motion.div>
            </section>
          ))}

          <hr className={styles.divider} />

          <motion.div className={styles.contact} {...sharedMotionProps}>
            <p>
              <strong className={styles.questionTitle}>
                {t('howItWorks.contact.questionTitle')}
              </strong>
              <br />
              {t('howItWorks.contact.text')} <br />
              <a href={`mailto:${t('howItWorks.contact.email')}`}>
                {t('howItWorks.contact.email')}
              </a>
              {t('howItWorks.contact.extra')}
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;
