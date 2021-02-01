/* eslint-disable */

import Widget from "../Widget";
import Loader from "./Loading";

export default function Loading() {
  return (
    <>
      <Widget.Header>
        <h1>Carregando...</h1>
      </Widget.Header>
      <Widget.Content style={{ minHeight: "250px", display: "flex" }}>
        <Loader />
      </Widget.Content>
    </>
  );
}
