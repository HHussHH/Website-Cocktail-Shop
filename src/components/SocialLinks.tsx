import styles from "../style/intro.module.scss";

import { VscGithub } from "react-icons/vsc";
import { RiTelegramLine } from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";
import { ImPinterest2 } from "react-icons/im";
const SocialLinks = () => {
  return (
    <div className={styles.links}>
      <div className={styles.link}>
        <VscGithub size={64} />
        <RiTelegramLine size={64} />
      </div>
      <div className={styles.link}>
        <SlSocialVkontakte size={64} />
        <ImPinterest2 size={64} />
      </div>
    </div>
  );
};

export default SocialLinks;
