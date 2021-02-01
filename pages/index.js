/* eslint-disable */

import db from "../db.json";
import BackgroundImage from "../components/BackgroundImage";
import QuizContainer from "../components/QuizContainer";
import Widget from "../components/Widget";
import QuizLogo from "../components/QuizLogo";
import Footer from "../components/Footer";
import GitHubCorner from "../components/GitHubCorner";
import Form from "../components/Form";
import { motion } from "framer-motion";

function Home() {
  return (
    <BackgroundImage backgroundImage={db.bg}>
      <GitHubCorner
        projectUrl={"https://github.com/renatosilvadiniz/alura-quiz-imersao-2"}
      />
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.div}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <Form />
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.div}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>{db.otherChallenges}</h1>
            <p>{db.otherChallengesDescription}</p>
            {db.external.map((link, index) => {
              const [projectName, githubUser] = link
                .replace(/\//g, "")
                .replace("https:", "")
                .replace(".vercel.app", "")
                .split(".");
              return (
                <Widget.Quizzes
                  key={index}
                  href={`/quiz/${projectName}___${githubUser}`}
                >
                  {`${projectName}/${githubUser}`}
                </Widget.Quizzes>
              );
            })}
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
      </QuizContainer>
    </BackgroundImage>
  );
}

export default Home;
