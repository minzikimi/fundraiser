import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styles from './PersonalDiploma.module.css';
import logo from "../../assets/images/smf-logo.png";
import Certificate from "../../components/Certificate/Certificate";
import Button from '../../components/Button/Button';


  const PersonalDiploma = () => {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('English');
  const certificateRef = useRef(); 

  const [subscribe, setSubscribe] = useState(false);
const [consent, setConsent] = useState(false);

  const handleCertificateDownload = () => {
    const element = certificateRef.current;
    const opt = {
      margin:       0.5,
      filename:     'donation-certificate.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'pt', format: 'a4', orientation: 'landscape' }
    };
    html2pdf().set(opt).from(element).save();
  };


  return (
    <div className={styles.container}>
        <a href="https://fundraiser-smf.vercel.app/" aria-label="Go to homepage">
                <img
                  src={logo}
                  alt="Sveriges Museum om Förintelsen logo"
                  className={styles.logo}
                />
              </a>
      <h2>Receive Your Personalized <br/>Donation Certificate</h2>
       <form className={styles.form} onSubmit={handleCertificateDownload}>
        <div className={styles.nameForm}>
          <label htmlFor="DonorName">Name</label>
          <input
            id="DonorName"
            name="DonorName"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className={styles.input}
            aria-label="Donor Name"
            required
          />
        </div>
        <div className={styles.language}>
          <legend>Choose language</legend>
          <label>
            <input
              type="radio"
              name="language"
              value="Svenska"
              checked={language === 'Svenska'}
              onChange={() => setLanguage('Svenska')}
            />
            Svenska
          </label>
          <label>
            <input
              type="radio"
              name="language"
              value="English"
              checked={language === 'English'}
              onChange={() => setLanguage('English')}
            />
            English
          </label>
        </div>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="subscribe"
            checked={subscribe}
            onChange={e => setSubscribe(e.target.checked)}
          />
          Yes, I’d like to receive updates and stories from the Swedish Holocaust Museum. (SAMPLE TEXT)
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="consent"
            checked={consent}
            onChange={e => setConsent(e.target.checked)}
          />
          I consent to my name being printed on the digital donor wall (optional). SAMPLE TEXT
        </label>
        <Button
          className={styles.button}
          type="submit"
          disabled={name.trim() === ""}
        >
          DOWNLOAD YOUR CERTIFICATE
        </Button>
      </form>
      {/* Render certificate preview (not included in form, so not submitted) */}
      <div
        style={{ display: 'inline-block', width: '100%' }}
        ref={certificateRef}
        aria-label="Certificate Preview"
      >
        <Certificate donorName={name.trim() !== "" ? name : "Anonymous"} />
      </div>
    </div>
  );
};

export default PersonalDiploma;