import db from "../db.json";
import BackgroundImage from "../components/BackgroundImage";
import QuizContainer from "../components/QuizContainer";
import Widget from "../components/Widget";
import QuizLogo from "../components/QuizLogo";
import Footer from "../components/Footer";
import GitHubCorner from "../components/GitHubCorner";

export default function Home() {
  return (
    <BackgroundImage backgroundImage={db.bg}>
      <GitHubCorner />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Jogar</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    </BackgroundImage>
  );
}
