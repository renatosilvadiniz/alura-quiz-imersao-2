/* eslint-disable */

import Widget from "../Widget";
import styled from "styled-components";
import { useRouter } from "next/router";

const Results = styled.p`
  color: ${({ theme, top }) =>
    top ? theme.colors.success : theme.colors.wrong};
`;

const BackHome = styled.p`
  margin-top: ${({ theme }) => theme.spacing.big};
  color: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;
  text-decoration: underline;
`;

export default function Result({ result }) {
  const hitBonus = 100;
  const totalQuestions = result.length;
  const hitTotal = result.filter((r) => r).length;
  const score = hitTotal * hitBonus;
  const percent = (hitTotal * 100) / totalQuestions;
  const router = useRouter();
  const player = router.query.name ? ` ${router.query.name}` : "";

  return (
    <>
      <Widget.Header>
        <h1>Score Final{player ? ` de${player}` : ""}</h1>
      </Widget.Header>
      <Widget.Content>
        <h2>Sua pontuação foi de {score} pontos.</h2>
        {percent === 100 && (
          <Results top={true}>
            OMG{player}! Você acertou todas as perguntas.
          </Results>
        )}
        {percent > 70 && percent < 100 && (
          <Results top={true}>
            Parabéns{player}! Você acertou {percent}% das questões, acima da
            nota de corte!
          </Results>
        )}
        {percent > 0 && percent < 70 && (
          <Results top={false}>
            Ops{player}! Você só acertou {percent}% das questões, abaixo da nota
            de corte! Tente novamente para melhorar sua nota!
          </Results>
        )}
        {percent === 0 && (
          <Results top={false}>
            OMG{player}! Você não acertou nenhuma pergunta.
          </Results>
        )}
        <BackHome onClick={() => router.back()}>Voltar para Home</BackHome>
      </Widget.Content>
    </>
  );
}
