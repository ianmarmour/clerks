import React, { useEffect, useState } from "react";
import { useInterval } from "../../helpers/hooks";
import Spinner from "react-bootstrap/Spinner";

function serverStatus(health) {
  if (!health) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Attempting to locate a valid clerk...</span>
      </Spinner>
    );
  } else {
    return <div>Welcome to clerk</div>;
  }
}

export default function Start() {
  const [state, setState] = useState("");

  useInterval(async () => {
    fetch("http://localhost:8080/status")
      .then((results) => results.json())
      .then((data) => {
        setState(data);
      });
  }, 10000);

  return <div>{serverStatus(state)}</div>;
}
