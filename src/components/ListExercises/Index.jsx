import styles from "./index.module.css";

export function ListExercises({ qtdExerciceos, onClick }) {
  return qtdExerciceos.list.map((item, index) => {
    return (
      <div key={index}>
        <button onClick={onClick} className={styles.btnExerciser} href="#">
          {item.exerciceo}
        </button>
      </div>
    );
  });
}
