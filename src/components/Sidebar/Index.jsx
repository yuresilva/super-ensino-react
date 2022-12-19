import { WhatsappLogo, GithubLogo, LinkedinLogo } from "phosphor-react";
import styles from "./Index.module.css";
import imgAluna from "../../assets/aluna.png";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <img className={styles.avatar} src={imgAluna} />
      </div>
      <footer>
        <p>Siga nas redes sociais</p>
        <div className={styles.icons}>
          <a href="#">
            <WhatsappLogo size={32} />
          </a>
          <a href="#">
            <GithubLogo size={32} />
          </a>
          <a href="#">
            <LinkedinLogo size={32} />
          </a>
        </div>
      </footer>
    </aside>
  );
}
