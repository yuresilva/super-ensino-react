import styles from "./index.module.css";

export function ListExercises({ qtdExerciceos }) {
  return (
    <>
      <a className={styles.btnExerciser} href="#">
        {qtdExerciceos}
      </a>
    </>
  );
}
