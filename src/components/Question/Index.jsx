import { useState, useEffect } from "react";

import { House, ArrowLeft, ArrowRight } from "phosphor-react";
import styles from "./Index.module.css";
import { NavLink } from "react-router-dom";

export function Questions({ questions, onClick, value }) {
  const [state, setState] = useState({
    currentQuestion: 0,
    currentDados: questions,
    dados: null,
  });


  const { currentQuestion, currentDados, dados } = state;
  let indiceAtual = 0;
  let valorResult = value.target.innerHTML;

  const proximaQuestao = () => {
    indiceAtual++;
    exerciceostr = `exerciceos ${indiceAtual + 1}`;
    // aqui você pode chamar a função que re-renderiza os dados da questão na tela
  };

  const questaoAnterior = () => {
    indiceAtual--;
    exerciceostr = `exerciceos ${indiceAtual + 1}`;
    // aqui você pode chamar a função que re-renderiza os dados da questão na tela
  };

  useEffect(() => {
    const componentList = () => {
      questions.list.map((element) => {
        if (element.exerciceo === valorResult) {
          setState((prevState) => ({
            ...prevState,
            dados: element
          }))
        }
      })
    };

    componentList();
  }, []);

  return (
    <>
      {dados && (
        <>
          <div className={styles.QuestionsContent}>
            <div className={styles.TitleContainer}>
              <NavLink to="/">
                <House size={32} onClick={onClick} />
              </NavLink>
              <h2>Super Ensino</h2> <span>{currentQuestion + 1}</span> /
              {questions.list.length}
              {console.log(dados)}
              {/* <h1>{}</h1> */}
            </div>
            <span>Analise as afirmativas a seguir</span>

            <p>{dados.question}</p>
            {/* <p>III -- Acordo cedo porque gosto de estudar.</p>
            <p>Assinale a alternativa correta</p> */}

            <div className={styles.GrupResponse}>
              <button className={styles.ResponseQuestion}>a</button>
              <p> {dados.correct} </p>
            </div>
            <div className={styles.GrupResponse}>
              <button className={styles.ResponseQuestion}>b</button>
              <p>{dados.incorrect[0]}</p>
            </div>
            <div className={styles.GrupResponse}>
              <button className={styles.ResponseQuestion}>c</button>
              <p>{dados.incorrect[1]}</p>
            </div>
            <div className={styles.GrupResponse}>
              <button className={styles.ResponseQuestion}>d</button>
              <p>{dados.incorrect[2]}</p>
            </div>
          </div>
          <div className={styles.GrupButtons}>
            <NavLink className={styles.GrupNexTBack} to="/">
              <ArrowLeft size={32} />
              Voltar
            </NavLink>
            <NavLink className={styles.GrupNexTBack} to="/">
              Próximo
              <ArrowRight size={32} />
            </NavLink>
          </div>
        </>
      )}

    </>
  );
}
