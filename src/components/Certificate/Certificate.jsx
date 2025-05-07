import React from "react";
import logo from "../../assets/images/logo-temporary.png";
import styles from "./Certificate.module.css";


const Certificate = ({
  donorName = "Donor Name",
  museumName = "Holocaust Museum",
  date = "May 7, 2025",
}) => (
  <div className="certificate">
    <style>{`
      .certificate {
        position: relative;
        width: 1400px;
        max-width: 95vw;
        margin: 40px auto;
        padding: 50px 50px 40px 50px;
        background:
          linear-gradient(135deg, #ffffff 90%, #f9d923 100%),
          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220"><polygon points="110,20 44,200 200,66 20,66 176,200 110,20" fill="none" stroke="rgba(26,35,126,0.07)" stroke-width="10"/></svg>')
          center 180px no-repeat;
        background-size: cover, 220px 220px;
        border: 8px solid #1a237e;
        border-radius: 18px;
        box-shadow: 0 8px 32px rgba(26,35,126,0.15);
        color: #1a237e;
        overflow: hidden;
        font-family: 'Georgia', serif;
      }
      .certificate::before {
        content: "";
        display: block;
        width: 100%;
        height: 10px;
        background: linear-gradient(90deg, #ffe082 0%, #ffd700 100%);
        border-radius: 4px 4px 0 0;
        position: absolute;
        top: 0;
        left: 0;
      }
      .certificate-header {
        text-align: center;
        margin-bottom: 30px;
      }
      .logo {
        width: 7rem;
        he
        opacity: 0.93;
      }
      .certificate-header h1 {
        font-family: 'Merriweather', serif;
        font-size: 2.5em;
        color: #1a237e;
        margin: 0;
        letter-spacing: 2px;
        font-weight: 700;
      }
      .candle-icon {
        display: block;
        margin: 0 auto 10px auto;
        width: 38px;
        opacity: 0.85;
      }
      .certificate-body {
        text-align: center;
        margin-bottom: 40px;
      }
      .presented {
        font-size: 1.1em;
        margin-bottom: 8px;
        font-style: italic;
      }
      .donor-name {
        font-size: 2em;
        color: #ffd700;
        margin-bottom: 18px;
        font-family: 'Merriweather', serif;
        font-weight: 700;
        letter-spacing: 1px;
      }
      .certificate-body p {
        font-size: 1.15em;
        line-height: 1.6;
        color: #1a237e;
        margin: 0 0 16px 0;
      }
      .dedication {
        margin-top: 18px;
        font-size: 1.1em;
        color: #757575;
        font-style: italic;
      }
      .certificate-footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 30px;
      }
      .signature {
        text-align: left;
      }
      .sig-line {
        border-bottom: 2px solid #1a237e;
        width: 180px;
        margin-bottom: 6px;
      }
      .sig-title {
        font-size: 1em;
        color: #1a237e;
      }
      .date {
        font-size: 1em;
        color: #1a237e;
        text-align: right;
      }
      .quote {
        font-size: 1em;
        color: #757575;
        text-align: center;
        margin-top: 28px;
        font-style: italic;
        letter-spacing: 0.5px;
      }
    `}</style>
    <div className="certificate-header">
      <div className="logo"></div>
      <img
        src={logo}
        alt="Sveriges Museum om Förintelsen logo"
        className={styles.logo}
      />
      <h1>Certificate of Donation</h1>
    </div>
    <div className="certificate-body">
      <p className="presented">Presented to</p>
      <h2 className="donor-name">{donorName}</h2>
      <p>
        In recognition and appreciation of your generous donation to the <strong>{museumName}</strong>.<br /><br />
        Your support helps us preserve the memory and lessons of the Holocaust for future generations.
      </p>
     
    </div>
    <div className="certificate-footer">
      <div className="signature">
      </div>
      <div className="date">Date: {date}</div>
    </div>
    <p className="quote">
      “For the dead and the living, we must bear witness.”<br />
      - Elie Wiesel
    </p>
  </div>
);

export default Certificate;
