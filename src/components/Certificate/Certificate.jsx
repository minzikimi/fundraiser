import styles from './Certificate.module.css';

export default function Certificate({ name, date }) {
  const displayName = name || 'Anonym'; 

  return (
    <div className={styles.diploma}>
      <p className={styles.logo}>Logo här</p> 
      <h1>Donationsbevis</h1> 
      <p>Detta intygar att</p> 
      <h2>{displayName}</h2> 
      <p>
        har bidragit till arbetet för att etablera <span className={styles.museum}>Sveriges museum om Förintelsen</span> 
        som en permanent statlig institution.
      </p>
      <p className={styles.date}>{date}</p>
      <p>Med uppriktigt tack från SMF.</p> 
    </div>
  );
}
