import db from "../db.json";
import BackgroundImage from "../components/BackgroundImage";
import QuizContainer from "../components/QuizContainer";
import Widget from "../components/Widget";
import QuizLogo from "../components/QuizLogo";
import Footer from "../components/Footer";
import GitHubCorner from "../components/GitHubCorner";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Input = styled.input`
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 900;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
`;

const MoreQuizzes = styled.a`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;

function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <BackgroundImage backgroundImage={db.bg}>
      <GitHubCorner />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <p>
              Full quizz{" "}
              <a
                href="https://www.w3schools.com/js/js_quiz.asp"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                placeholder="Type your nickname here"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <Button disabled={name.length === 0}>
                Are you ready{name.length > 0 ? " " + name : ""}?
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>{db.otherChallenges}</h1>
            <p>{db.otherChallengesDescription}</p>
            <MoreQuizzes href="https://google.com" target="_blank">
              Teste
            </MoreQuizzes>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    </BackgroundImage>
  );
}

export default Home;
