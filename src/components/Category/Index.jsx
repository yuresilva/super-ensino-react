import React, { useState, useContext, useEffect } from "react";
import styles from "./Index.module.css";
import { ListExercises } from "../ListExercises/Index";
import { AppContext } from "../../Context/Index";
import { CaretCircleUp, CaretCircleDown } from "phosphor-react";
export const Category = ({ materia }) => {
  const { state } = useContext(AppContext);
  const [{ list }] = state.data;
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={styles.question}>
      <header>
        <h4
          onClick={() => setExpanded(!expanded)}
          className={styles.questionTitle}
        >
          {materia}
        </h4>
        <button className={styles.btn} onClick={() => setExpanded(!expanded)}>
          {expanded ? <CaretCircleUp /> : <CaretCircleDown />}
        </button>
      </header>
      {expanded && (
        <div className={styles.contentList}>
          {list.map((item, index) => (
            <ListExercises key={item.id} qtdExerciceos={item.exerciceo} />
          ))}
        </div>
      )}
    </article>
  );
};
