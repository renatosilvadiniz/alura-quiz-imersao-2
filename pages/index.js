/* eslint-disable */

import db from "../db.json";
import BackgroundImage from "../components/BackgroundImage";
import QuizContainer from "../components/QuizContainer";
import Widget from "../components/Widget";
import QuizLogo from "../components/QuizLogo";
import Footer from "../components/Footer";
import GitHubCorner from "../components/GitHubCorner";
import Form from "../components/Form";

function Home() {
  return (
    <BackgroundImage backgroundImage={db.bg}>
      <GitHubCorner
        projectUrl={"https://github.com/renatosilvadiniz/alura-quiz-imersao-2"}
      />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <Form />
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>{db.otherChallenges}</h1>
            <p>{db.otherChallengesDescription}</p>
            <Widget.Quizzes href="https://google.com" target="_blank">
              João
            </Widget.Quizzes>
            <Widget.Quizzes href="https://google.com" target="_blank">
              Maria
            </Widget.Quizzes>
            <Widget.Quizzes href="https://google.com" target="_blank">
              José
            </Widget.Quizzes>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    </BackgroundImage>
  );
}

export default Home;
