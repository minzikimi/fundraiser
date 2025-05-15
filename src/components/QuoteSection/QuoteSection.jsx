import React from "react";
import styles from "./QuoteSection.module.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeInFromTop = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const QuoteSection = () => {
  const { t } = useTranslation();

  return (
     <section
      className={styles.quoteSection}
      aria-labelledby="quote-section-heading"
      tabIndex={-1}
    >
      <div className={styles.quoteSectionContent}>
        <div className={styles.headingWrapper}>
          <motion.h2
            className={styles.quoteSectionHeading}
            variants={fadeInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t("quote-section.title")}
          </motion.h2>
        </div>
        <motion.p
          className={styles.quoteDiscription}
          variants={fadeInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          {t("quote-section.text")}
        </motion.p>
      </div>
    </section>
  );
};

export default QuoteSection;
