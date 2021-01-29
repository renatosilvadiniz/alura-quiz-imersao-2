/* eslint-disable */

import styled from "styled-components";

const QuizPlayer = styled.strong`
  padding: ${({ theme }) => theme.spacing.small};
  margin-left: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
  strong {
    text-transform: uppercase;
    font-weight: 900;
  }
`;

const Player = ({ player }) => {
  return (
    <QuizPlayer>
      {" "}
      <strong>
        {player.length > 8 ? player.substr(0, 5) + "..." : player}
      </strong>{" "}
    </QuizPlayer>
  );
};

export default Player;
