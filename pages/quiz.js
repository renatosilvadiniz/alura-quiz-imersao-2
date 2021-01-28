/* eslint-disable */

import db from "../db.json";
import BackgroundImage from "../components/BackgroundImage";
import QuizContainer from "../components/QuizContainer";
import Widget from "../components/Widget";
import QuizLogo from "../components/QuizLogo";
import Questions from "../components/Quiz";
import Loading from "../components/Loading";
import Result from "../components/Result";
import { useEffect, useState } from "react";

export default function Quiz() {
  const screenStates = {
    loading: "loading",
    playing: "playing",
    result: "result",
  };
  const [current, setCurrent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [screenState, setScreenState] = useState(screenStates.loading);
  const currentQuestion = db.questions[current];
  const currentQuestionIndex = current + 1;
  const totalQuestions = db.questions.length;
  const handleSubmit = () => {
    if (currentQuestionIndex + 1 > totalQuestions) {
      setIsFinished(true);
    } else {
      setCurrent(current + 1);
      setScreenState(screenStates.loading);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      isFinished
        ? setScreenState(screenStates.result)
        : setScreenState(screenStates.playing);
    }, 1000);
  });

  return (
    <BackgroundImage backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          {screenState === screenStates.playing && (
            <Questions
              question={currentQuestion}
              questionIndex={currentQuestionIndex}
              totalQuestions={totalQuestions}
              nextQuestion={handleSubmit}
            />
          )}
          {screenState === screenStates.loading && <Loading />}
          {screenState === screenStates.result && <Result />}
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
}
