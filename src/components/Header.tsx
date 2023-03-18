import styles from "../style/header.module.scss";
import Logo from "../image/icon-logo.svg";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>О нас</li>
          <li>Рецепты</li>
          <li>Статьи</li>
          <li>Контакты</li>
        </ul>
      </nav>
      <BsSearch size={28} className={styles.btn} />
    </header>
  );
};

export default Header;
