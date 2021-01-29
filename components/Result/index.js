/* eslint-disable */

import Widget from "../Widget";
import QuizPlayer from "../Player";
import styled from "styled-components";

const Results = styled.p`
  color: ${({ theme, top }) =>
    top ? theme.colors.success : theme.colors.wrong};
`;

export default function Result({ result, player }) {
  const hitBonus = 100;
  const totalQuestions = result.length;
  const hitTotal = result.filter((r) => r).length;
  const score = hitTotal * hitBonus;
  const percent = (hitTotal * 100) / totalQuestions;

  return (
    <>
      <Widget.Header>
        <h1>Seu score</h1>
        <QuizPlayer player={player} />
      </Widget.Header>
      <Widget.Content>
        <h1>Sua pontuação foi de {score} pontos.</h1>
        {percent > 70 && (
          <Results top={true}>
            Parabéns! Você acertou {percent}% das questões.
          </Results>
        )}
        {percent < 70 && (
          <Results top={false}>
            Ops! Você só acertou {percent}% das questões.
          </Results>
        )}
      </Widget.Content>
    </>
  );
}
