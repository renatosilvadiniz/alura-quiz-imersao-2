/* eslint-disable */

import db from "../../db.json";
import QuizPage from "../../screens/Quiz";

export default function Page() {
  return <QuizPage data={db} />;
}
