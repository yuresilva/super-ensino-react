import React, { useState, useContext, useEffect } from "react";
import styles from "./Index.module.css";
import { ListExercises } from "../ListExercises/Index";
import { AppContext } from "../../Context/Index";
import { CaretCircleUp, CaretCircleDown } from "phosphor-react";
import { Questions } from "../Question/Index";
export const Category = ({ materia }) => {
  const { state } = useContext(AppContext);
  const [expanded, setExpanded] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [value, setValue] = useState("");

  const handleHome = () => {
    setQuestions([]);
  };

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
          {questions.length != 0 ? (
            <>
              <Questions
                questions={questions}
                value={value}
                onClick={handleHome}
              />
            </>
          ) : (
            <>
              {" "}
              {state.data.map((item, index) => {
                if (materia === item.materia) {
                  return (
                    <ListExercises
                      key={index}
                      qtdExerciceos={item}
                      onClick={(e) => {
                        setQuestions(item);
                        setValue(e);
                      }}
                    />
                  );
                }
              })}
            </>
          )}
        </div>
      )}
    </article>
  );
};
