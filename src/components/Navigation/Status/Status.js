import React, { useState } from "react";
import { useInterval } from "../../../helpers/hooks";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

function serverStatus(health) {
  if (!health) {
    return (
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Attemping to contact your Clerk...
      </Button>
    );
  } else {
    return (
      <div>
        <Button variant="success">Clerk Status Online</Button>
      </div>
    );
  }
}

export default function Status() {
  const [state, setState] = useState("");

  useInterval(async () => {
    fetch("http://localhost:8080/status")
      .then((results) => results.json())
      .then((data) => {
        setState(data);
      });
  }, 500);

  return <div>{serverStatus(state)}</div>;
}
