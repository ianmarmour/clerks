import React, { useEffect, useState, useRef } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Log() {
  const [messages, setMessages] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080/log");
    ws.current.onopen = () =>
      console.log(`Logging WS Opened: "ws://localhost:8080/log"`);
    ws.current.onclose = () =>
      console.log(`Logging WS Closed:"ws://localhost:8080/log"`);

    return () => {
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      console.log(e);

      const message = JSON.parse(e.data);
      console.log(message);
      setMessages([...messages, message.body]);
    };
  }, [messages]);

  const messageItems = messages.map((message) => (
    <ListGroup.Item>{message}</ListGroup.Item>
  ));

  return (
    <div>
      <br />
      <Row>
        <Col>
          <Card>
            <Card.Header as="h5">Clerk Log Information</Card.Header>

            <ListGroup>{messageItems}</ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
