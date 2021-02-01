/* eslint-disable */

import styled from "styled-components";
import Nextlink from "next/link";

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  border-radius: 4px;
  overflow: hidden;
  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  }
  form,
  input,
  button,
  a,
  span {
    border: none;
    width: 100%;
    display: block;
  }
  a,
  span,
  input,
  button {
    font-size: ${({ theme }) => theme.fontSize.small};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ theme }) => theme.spacing.small};
  }
  a {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.black};
  }
  a,
  span {
    text-decoration: none;
    margin-bottom: ${({ theme }) => theme.spacing.small};
    &:last-child() {
      margin-bottom: 0;
    }
  }
  a,
  span,
  button:not(:disabled) {
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  }
  .input_quiz {
    display: none !important;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 22px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Quizzes = ({ href, children }) => {
  return (
    <Nextlink href={href} passHref>
      <a>{children}</a>
    </Nextlink>
  );
};

const Span = styled.span`
  background-color: ${({ theme, status, choosed, index }) => {
    if (choosed === index) {
      if (status === "submit") return `${theme.colors.secondary}99`;
      if (status === "success") return theme.colors.success;
      if (status === "wrong") return theme.colors.wrong;
    } else {
      return theme.colors.secondary;
    }
  }};
  color: ${({ theme, status, choosed, index }) => {
    return status !== "submit" && choosed === index
      ? theme.colors.contrastText
      : theme.colors.black;
  }};
`;

Widget.Quiz = ({
  alternatives,
  setIsDisabled,
  status,
  choosed,
  setChoosed,
}) => {
  return alternatives.map((alternative, index) => {
    return (
      <label
        key={index}
        htmlFor={`id${index}`}
        onClick={() => {
          setIsDisabled(false);
          setChoosed(index);
        }}
      >
        <input
          type="radio"
          id={`id${index}`}
          name="quiz"
          className="input_quiz"
          value={index}
        />
        <Span status={status} choosed={choosed} index={index}>
          {alternative}
        </Span>
      </label>
    );
  });
};

export default Widget;
