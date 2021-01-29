/* eslint-disable */

import Widget from "../Widget";
import Button from "../Button";
import QuizPlayer from "../Player";
import QuizBack from "../Back";
import styled from "styled-components";
import { useState } from "react";


const QuizImage = styled.div`
  background-image: url(${({ src }) => src});
  height: 150px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const QuizMessage = styled.p`
  margin: ${({ theme }) => theme.spacing.small} 0 0 0;
  height: ${({ theme }) => theme.spacing.small};
  opacity: ${({ status }) => (status === "submit" ? 0 : 1)};
  color: ${({ theme, status }) => {
    if (status === "submit") return "transparent";
    if (status === "success") return theme.colors.success;
    if (status === "wrong") return theme.colors.wrong;
  }};
`;

export default function Questions({
  question,
  nextQuestion,
  questionIndex,
  totalQuestions,
  player,
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [status, setStatus] = useState("submit");
  const [choosed, setChoosed] = useState(undefined);
  const handleSubmit = (event) => {
    event.preventDefault();
    const isRightAnswer = question.answer === choosed;
    isRightAnswer ? setStatus("success") : setStatus("wrong");
    setIsDisabled(true);
    setTimeout(() => {
      nextQuestion(isRightAnswer);
    }, 1000);
  };

  return (
    <>
      <Widget.Header>
        <QuizBack src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" />
        <h1>
          {`Pergunta ${questionIndex} de ${totalQuestions}`}
          <QuizPlayer player={player} />
        </h1>
      </Widget.Header>
      <QuizImage src={question.image} />
      <Widget.Content>
        <h1>{question.title}</h1>
        <p>{question.description}</p>
        <form onSubmit={handleSubmit}>
          <Widget.Quiz
            alternatives={question.alternatives}
            setIsDisabled={setIsDisabled}
            status={status}
            choosed={choosed}
            setChoosed={setChoosed}
          />
          <Button disabled={isDisabled} type="submit">
            Confirmar Resposta
          </Button>
          <QuizMessage status={status}>
            {status === "success" && "Parabéns! Resposta Certa."}
            {status === "wrong" && "Ops! Resposta Errada."}
          </QuizMessage>
        </form>
      </Widget.Content>
    </>
  );
}
