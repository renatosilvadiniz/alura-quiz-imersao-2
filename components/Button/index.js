/* eslint-disable */

import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  opacity: ${({ disabled }) => {
    return disabled ? 0.5 : 1;
  }};
  font-weight: 900;
  text-transform: uppercase;
  margin: auto;
`;

export default Button;
