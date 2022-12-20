import { useState, useEffect } from "react";

import { House, ArrowLeft, ArrowRight } from "phosphor-react";
import styles from "./Index.module.css";
import { NavLink } from "react-router-dom";

export function Questions({ questions, onClick, value }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentDados, setcurrentDados] = useState(questions);
  const [dados, setDados] = useState(null);

  let indiceAtual = 0;
  let valorResult = value.target.innerHTML;

  const senData = () => {
    setDados();
  };
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

  function componentList() {
    questions.list.forEach((element) => {
      var filtro = element.exerciceo == valorResult ? element.id : "";
      const filteredList = questions.list.filter((item) => item.id === filtro);
      if (filteredList != 0) {
        return (
          <>
            <div className={styles.QuestionsContent}>
              <div className={styles.TitleContainer}>
                <NavLink to="/">
                  <House size={32} onClick={onClick} />
                </NavLink>
                <h2>Super Ensino</h2> <span>{currentQuestion + 1}</span> /
                {questions.list.length}
                <div>
                  <p>ID: {filteredList.id}</p>

                  <p>Dificuldade: {filteredList.difficulty}</p>
                  <p>Pergunta: {filteredList.question}</p>
                  <p>Resposta correta: {filteredList.correct}</p>
                </div>
              </div>
              <span>Analise as afirmativas a seguir</span>
              <p> {filteredList.question}</p>
              <p>II -- Queria saber porque você faltou aula.</p>
              <p>III -- Acordo cedo porque gosto de estudar.</p>
              <p>Com releção ao uso dos porquês, estão corretas?</p>

              <div className={styles.GrupResponse}>
                <button className={styles.ResponseQuestion}>a</button>
                <p>Apenas a III Apenas a III</p>
              </div>
              <div className={styles.GrupResponse}>
                <button className={styles.ResponseQuestion}>b</button>
                <p>Apenas a III Apenas a III</p>
              </div>
              <div className={styles.GrupResponse}>
                <button className={styles.ResponseQuestion}>c</button>
                <p>Apenas a III Apenas a III</p>
              </div>
              <div className={styles.GrupResponse}>
                <button className={styles.ResponseQuestion}>d</button>
                <p>Apenas a III</p>
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
        );
      }
    });
  }

  useEffect(() => {
    componentList();
  }, []);
}
