import React from "react";
import styles from "./ThankYou.module.css";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <main className="container">
      <nav className="navbarGoBack" aria-label="Go back navigation">
        <button
          className="goBackBtn"
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          ← Go back
        </button>
      </nav>
      <header className="headerThankYou">
        <p>logo goes here</p>
        <h1 className="titleThankYou">Thank you</h1>
      </header>
      <section className="progressBarSection" aria-label="Donation Progress">
        <p>progress bar goes here</p>
        <h2>
          Your contribution helps preserve the stories of those who can no
          longer speak.
        </h2>
      </section>
      <section className="formSection">
        <p>
          Providing your name is optional. In case you would like your name
          printed on your certificate, please enter name below:
        </p>
        <form className="nameAndEmailForm">
          <div>
            <label htmlFor="name">Name: (optional)</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
            ></input>
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
            ></input>
          </div>
        </form>
        <button type="submit" id="submitBtn">
          SUBMIT
        </button>
      </section>
      <section className="downloadCertificate">
        <h3>Thank you for contributing to our mission.</h3>
        <button type="button" id="downloadBtn">
          DOWNLOAD CERTIFICATE
        </button>
      </section>
    </main>
  );
};

export default ThankYou;
