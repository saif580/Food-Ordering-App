import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return <div>
    <h1>OOPS!!</h1>
    <h2>{error.status}:{error.statusText}</h2>
  </div>;
};

export default ErrorPage;
