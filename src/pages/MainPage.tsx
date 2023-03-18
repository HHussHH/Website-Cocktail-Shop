import Header from "../components/Header";
import Intro from "../components/Intro";
import SocialLinks from "../components/SocialLinks";
import styles from "../style/mainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <Header />
        <Intro />
        <SocialLinks />
      </div>
    </div>
  );
};

export default MainPage;
