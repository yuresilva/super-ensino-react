import { useState, useEffect } from "react";

import { House, ArrowLeft, ArrowRight } from "phosphor-react";
import styles from "./Index.module.css";
import { NavLink } from "react-router-dom";

const reorderAnswers = (question) => {
  const answers = [question.correct, ...question.incorrect];

  for (let index = 0; index < answers.length; index++) {
    const j = Math.floor(Math.random() * index);
    const tmp = answers[index];
    answers[index] = answers[j];
    answers[j] = tmp;
  }

  return answers;
};

export function Questions({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const question = questions[currentQuestionIndex];
    setCurrentQuestion(question);
    setAnswers(reorderAnswers(question));
  }, [currentQuestionIndex]);

  const selectAnswer = (answer) => {
    setIsSubmitting(true);
    setSelectedAnswer(answer);

    if (answer === currentQuestion.correct) {
      setCountCorrectAnswers(countCorrectAnswers + 1);
    }

    setTimeout(() => {
      const newQuestionIndex = currentQuestionIndex + 1;

      if (newQuestionIndex === questions.length) {
        setIsDone(true);
      } else {
        setCurrentQuestionIndex(newQuestionIndex);
        setIsSubmitting(false);
        setSelectedAnswer(null);
      }
    }, 750);
  };

  if (isDone) {
    return <Result countCorrectAnswers={countCorrectAnswers} />;
  }

  return (
    <>
      <div className={styles.TitleContainer}>
        <NavLink to="/">
          <House size={32} />
        </NavLink>
        <h2>Super Ensino</h2>
      </div>

      <div className={styles.QuestionsContent}>
        <p>
          {" "}
          {currentQuestionIndex + 1}/{questions.length}
        </p>
        <span>Analise as afirmativas a seguir</span>
        <p> {questions}</p>
        <p>II -- Queria saber porque você faltou aula.</p>
        <p>III -- Acordo cedo porque gosto de estudar.</p>
        <p>Com releção ao uso dos porquês, estão corretas?</p>
        <div className={styles.GrupResponse}>
          <button className={styles.ResponseQuestion}>a</button>
          <p>II e III</p>
        </div>
        <div className={styles.GrupResponse}>
          <button className={styles.ResponseQuestion}>b</button>
          <p>Apenas I</p>
        </div>
        <div className={styles.GrupResponse}>
          <button className={styles.ResponseQuestion}>c</button>
          <p>I, II e III</p>
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
