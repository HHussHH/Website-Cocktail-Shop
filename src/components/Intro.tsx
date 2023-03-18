import styles from "../style/intro.module.scss";
const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>Коктейли дома</h1>
      <span className={styles.subtitle}>
        Бармен Сергей готовит в домашних условиях
      </span>
    </div>
  );
};

export default Intro;
