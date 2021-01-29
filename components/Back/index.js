/* eslint-disable */

import styled from "styled-components";
import { useRouter } from "next/router";

const QuizWrapper = styled.div`
  width: 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.small};
  margin-right: ${({ theme }) => theme.spacing.small};
  cursor: pointer;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuizBack = styled.img`
  width: 100%;
`;

const Quiz = ({ src }) => {
  const router = useRouter();
  return (
    <QuizWrapper onClick={() => router.back()}>
      <QuizBack src={src} />
    </QuizWrapper>
  );
};

export default Quiz;
