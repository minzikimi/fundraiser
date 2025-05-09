import React from 'react';
import styles from './howItWorks.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { motion } from 'framer-motion';

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

const steps = [
  {
    title: '1. Choose Your Donation Method',
    text: 'You can donate in either of these two ways:',
    list: ['Bank Transfer', 'Swish (Sweden only)']
  },
  {
    title: '2. Confirm Your Donation',
    text: 'Once you’ve sent your donation, you can optionally email us to get a confirmation or receipt:',
    email: true
  },
  {
    title: '3. See Your Impact',
    text: 'Your donation helps us fund real, ongoing projects. We share regular updates via:',
    list: [
      'Our newsletter signup',
      'Instagram',
      <>
        Website blog:{' '}
        <a
          className={styles.link}
          href="https://museumforintelsen.se/om-museet/permanent-museum/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://museumforintelsen.se/om-museet/permanent-museum/
        </a>
      </>
    ]
  }
];

const HowItWorks = () => {
  return (
    <>
      <NavBar />
      <div className={styles.howItWorksContainer}>
        <motion.div className={styles.content} {...sharedMotionProps}>
          <h2 className={styles.heading}>How It Works</h2>
          <p className={styles.intro}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s
          </p>

          <hr className={styles.divider} />

          {steps.map((step, i) => (
            <motion.div
              className={styles.step}
              key={i}
              {...sharedMotionProps}
              transition={{ ...sharedMotionProps.transition, delay: 0.1 * i }}
            >
              <h3 className={styles.stepTitle}>{step.title}</h3>
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
                  <a className={styles.email} href="mailto:info@museumforintelsen.se">
                    ✉️ info@museumforintelsen.se
                  </a>
                  <p className={styles.sampleText}>
                    Include your name, donation amount, and date if you’d like a receipt or acknowledgment.
                  </p>
                </>
              )}
            </motion.div>
          ))}

          <hr className={styles.divider} />

          <motion.div className={styles.contact} {...sharedMotionProps}>
            <p>
            <strong className={styles.questionTitle}>Still Have Questions?</strong>

              <br />
              We’re here to help! Contact <br />
              <a href="mailto:info@museumforintelsen.se">info@museumforintelsen.se</a> or visit our Contact Page.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;
