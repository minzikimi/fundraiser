import React, { useEffect, useState } from "react";
import styles from "./FAQ.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import faqImage from "../../assets/images/temporary-faq-image.png";
import FAQModal from "./FAQModal";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const faqData = t("faq", { returnObjects: true });

  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const openModal = (faq) => {
    setActiveFAQ(faq);
  };

  const closeModal = () => {
    setActiveFAQ(null);
  };

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <h2 id="faq-heading" className={styles.faqHeading}>
          FAQ
        </h2>
        <hr className={styles.underline} />
        <div className={styles.faqContent}>
          <dl className={styles.questionsContainer}>
            {faqData.map((faq, index) => (
              <div key={index} data-aos="fade-up">
                <dt>
                  <button
                    className={styles.button}
                    onClick={() => openModal(faq)}
                    aria-expanded={activeFAQ?.question === faq.question}
                    aria-controls={`faq-answer-${index}`}
                  >
                    Q. {faq.question}
                  </button>
                </dt>
              </div>
            ))}
          </dl>
          <img
            src={faqImage}
            alt="Illustration related to frequently asked questions"
            className={styles.faqImage}
          />
        </div>

        {activeFAQ && (
          <FAQModal
            question={activeFAQ.question}
            answer={activeFAQ.answer}
            onClose={closeModal}
          />
        )}
      </section>
    </div>
  );
};

export default FAQ;
