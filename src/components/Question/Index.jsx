import { useState, useEffect } from "react";

import { House, ArrowLeft, ArrowRight } from "phosphor-react";
import styles from "./Index.module.css";
import { NavLink } from "react-router-dom";

export function Questions({ questions, onClick, value }) {
  const [state, setState] = useState({
    currentQuestion: 0,
    dados: null,
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const { currentQuestion, dados } = state;

  var valorResult = value.target.innerHTML;

  function updateData() {
    const { currentQuestion } = state;

    setState((prevState) => ({
      ...prevState,
      dados: questions.list[currentQuestion],
    }));
  }

  function handleNext() {
    setSelectedOption(null);
    const { currentQuestion } = state;

    if (currentQuestion < questions.list.length - 1) {
      setState((prevState) => ({
        ...prevState,
        currentQuestion: prevState.currentQuestion + 1,
      }));
      updateData();
    }
  }

  function handleBack() {
    setSelectedOption(null);
    const { currentQuestion } = state;

    if (currentQuestion > 0) {
      setState((prevState) => ({
        ...prevState,
        currentQuestion: prevState.currentQuestion - 1,
      }));
      updateData();
    }
  }
  useEffect(() => {
    const componentList = () => {
      questions.list.map((element) => {
        if (element.exerciceo === valorResult) {
          setState((prevState) => ({
            ...prevState,
            dados: element,
          }));
        }
      });
    };

    componentList();
  }, []);

  return (
    <>
      {dados && (
        <div className={styles.QuestionsContainer}>
          <div className={styles.QuestionsContent}>
            <div className={styles.TitleContainer}>
              <NavLink to="/">
                <House size={32} onClick={onClick} />
              </NavLink>
              <h2>Super Ensino</h2> <br />
              {console.log(dados)}
            </div>
            <span>
              {" "}
              Exercíceo {currentQuestion + 1} / {questions.list.length}
            </span>
            <span>Analise as afirmativas a seguir</span>

            <p>{dados.question}</p>
            <div
              className={`${styles.GrupResponse} ${
                selectedOption === "a"
                  ? styles.selectedOption
                  : styles.unselectedOption
              }`}
            >
              <button
                className={styles.ResponseQuestion}
                onClick={() => setSelectedOption("a")}
              >
                a
              </button>
              <p> {dados.correct} </p>
            </div>
            <div
              className={`${styles.GrupResponse} ${
                selectedOption === "b"
                  ? styles.selectedOption
                  : styles.unselectedOption
              }`}
            >
              <button
                className={styles.ResponseQuestion}
                onClick={() => setSelectedOption("b")}
              >
                b
              </button>
              <p>{dados.incorrect[0]}</p>
            </div>
            <div
              className={`${styles.GrupResponse} ${
                selectedOption === "c"
                  ? styles.selectedOption
                  : styles.unselectedOption
              }`}
            >
              <button
                className={styles.ResponseQuestion}
                onClick={() => setSelectedOption("c")}
              >
                c
              </button>
              <p>{dados.incorrect[1]}</p>
            </div>
            <div
              className={`${styles.GrupResponse} ${
                selectedOption === "d"
                  ? styles.selectedOption
                  : styles.unselectedOption
              }`}
            >
              <button
                className={styles.ResponseQuestion}
                onClick={() => setSelectedOption("d")}
              >
                d
              </button>
              <p>{dados.incorrect[2]}</p>
            </div>
            <div className={styles.GrupButtons}>
              <button onClick={handleBack} className={styles.GrupNexTBack}>
                <ArrowLeft size={32} />
                Voltar
              </button>
              <button onClick={handleNext} className={styles.GrupNexTBack}>
                Próximo
                <ArrowRight size={32} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
