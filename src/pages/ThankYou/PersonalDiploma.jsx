import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styles from './PersonalDiploma.module.css';
import logo from "../../assets/images/white-logo.png";
import Certificate from "../../components/Certificate/Certificate";


  const PersonalDiploma = () => {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('English');
  const certificateRef = useRef(); 

  
  const handleDownload = () => {
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
        <a href="https://museumforintelsen.se/" aria-label="Go to homepage">
                <img
                  src={logo}
                  alt="Sveriges Museum om Förintelsen logo"
                  className={styles.logo}
                />
              </a>
      <h2>Receive Your Personalized <br/>Donation Certificate</h2>
      <div className={styles.nameForm}>
      <label htmlFor="DonorName">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
       </div>
      <div className={styles.language}>
        <p>Choose language</p>
        <label>
          <input
            type="radio"
            value="Svenska"
            checked={language === 'Svenska'}
            onChange={() => setLanguage('Svenska')}
          />
          Svenska
        </label>
        <label>
          <input
            type="radio"
            value="English"
            checked={language === 'English'}
            onChange={() => setLanguage('English')}
          />
          English
        </label>
      </div>

      <label className={styles.checkbox}>
        <input type="checkbox" />
        Yes, I’d like to receive updates and stories from the Swedish Holocaust Museum. (SAMPLE TEXT)
      </label>

      <label className={styles.checkbox}>
        <input type="checkbox" />
        I consent to my name being printed on the digital donor wall (optional). SAMPLE TEXT
      </label>

      <button className={styles.button} onClick={handleDownload}>Download Your Certificate</button>
       <div style={{ display: 'inline-block', width: '100%' }} ref={certificateRef}>
        <Certificate donorName={name.trim() !== "" ? name : "Anonymous"} />
      </div>
      </div>
  );
};

export default PersonalDiploma;
