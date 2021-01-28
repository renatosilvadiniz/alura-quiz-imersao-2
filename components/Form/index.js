/* eslint-disable */

import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../Button";

const Input = styled.input`
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const Form = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        router.push(`/quiz?name=${name}`);
      }}
    >
      <Input
        placeholder="Digite seu apelido"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <Button disabled={name.length === 0} type="submit">
        Bora Jogar{name.length > 0 ? " " + name : ""}?
      </Button>
    </form>
  );
};

export default Form;
