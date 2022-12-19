import styles from "./Index.module.css";
import logoSuperEnsino from "../../assets/logo-super-ensino-header.svg";
export function Header() {
  return (
    <div className={styles.header}>
      <img src={logoSuperEnsino} alt="logotipo da super ensino" />
    </div>
  );
}
