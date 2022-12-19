import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Index";
import { Sidebar } from "../components/Sidebar/Index";
import styles from "./Index.module.css";

export function DefaultLayout() {
  return (
    <>
      <Header />

      <div className={styles.DefaultLayoutContainer}>
        <div className={styles.DefaultLayoutWrapper}>
          <Sidebar />
          <div className={styles.DefaultLayoutContent}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
