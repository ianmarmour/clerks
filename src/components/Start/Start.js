import React, { useEffect, useState } from "react";
import { useInterval } from "../../helpers/hooks";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function intro() {
  return (
    <Card>
      <Card.Header as="h5">Welcome</Card.Header>
      <Card.Body>
        <Card.Title>What is Clerks</Card.Title>
        <Card.Text>
          Clerks.app is a UI that consumers can use with their buy and
          monitoring bots to simplify the setup, configuration and monitoring
          without needing their development teams to design their own UI.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

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

export default function Start() {
  const [state, setState] = useState("");

  useInterval(async () => {
    fetch("http://localhost:8080/status")
      .then((results) => results.json())
      .then((data) => {
        setState(data);
      });
  }, 500);

  return <div></div>;
}
