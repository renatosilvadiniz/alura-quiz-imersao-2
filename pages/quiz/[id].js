/* eslint-disable */

import React from "react";
import { ThemeProvider } from "styled-components";
import QuizPage from "../../screens/Quiz";

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizPage data={dbExterno} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split("___");

  const dbExterno = await fetch(
    `https://${projectName}.${githubUser}.vercel.app/api/db`
  )
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Não foi possível completar sua request");
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      dbExterno,
    },
  };
}
