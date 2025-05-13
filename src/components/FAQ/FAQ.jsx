import styles from "./FAQ.module.css";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import faqImage from "../../assets/images/temporary-faq-image.png";
import FAQModal from "./FAQModal";
import { div } from "framer-motion/client";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const faqData = t("faq", { returnObjects: true });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const openModal = (faq) => {
    setActiveFAQ(faq);
  };

  const closeModal = () => {
    setActiveFAQ(null);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.faqSection}>
        <h2 className={styles.faqHeading}>FAQ</h2>
        <hr className={styles.underline} />
        <div className={styles.faqContent}>
          <div className={styles.questionsContainer}>
            {faqData.map((faq, index) => (
              <button
                key={index}
                className={styles.button}
                data-aos="fade-up"
                onClick={() => openModal(faq)}
              >
                Q. {faq.question}
              </button>
            ))}
          </div>
          <img src={faqImage} alt="FAQ_image" className={styles.faqImage} />
        </div>
        {activeFAQ && (
          <FAQModal
            question={activeFAQ.question}
            answer={activeFAQ.answer}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default FAQ;
