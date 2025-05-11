import styles from "./FAQ.module.css";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import faqImage from "../../assets/images/temporary-faq-image.png";
import FAQModal from "./FAQModal";

const faqData = [
  {
    question:
      "Why do you need donations? Isn’t the museum funded by the government?",
    answer:
      "SMF is part of Sweden’s national museum organization, but it is currently operating as a temporary museum. To become a permanent institution, we need additional funding. Your donation directly supports the expansion of the museum’s exhibitions, programs, and public accessibility—ensuring that the memory of the Holocaust remains present and powerful in Swedish society..",
  },
  {
    question: "How will my donation be used?",
    answer:
      "Donations will go toward creating permanent exhibitions, preserving survivor testimonies, expanding educational programs, and improving the museum’s physical space. SMF is committed to transparency, and all spending will be accounted for in annual public reports.",
  },
  {
    question: "Does a small donation even make a difference?",
    answer:
      " Absolutely. What matters most is the intention to remember and support this work. Every contribution—no matter the size—helps us build a lasting space for Holocaust remembrance and education in Sweden.",
  },
  {
    question: "Will my name be made public? Can I donate anonymously?",
    answer:
      "You can absolutely donate anonymously if you prefer. Receiving a certificate or being listed as a donor is entirely optional. We deeply respect your privacy and appreciate all forms of support, whether public or private.",
  },
];

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const openModal = (faq) => {
    setActiveFAQ(faq);
  };

  const closeModal = () => {
    setActiveFAQ(null);
  };

  return (
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
  );
};

export default FAQ;
