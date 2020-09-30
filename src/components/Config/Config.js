import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const buildSelect = (component) => {
  return (
    <Form.Group as={Row} controlId={component.name}>
      <Form.Label column sm="2">
        {component.name}
      </Form.Label>{" "}
      <Col sm="10">
        <Form.Control as="select" defaultValue="Choose...">
          {component.value.map((value) => {
            return <option value={value}>{value}</option>;
          })}
        </Form.Control>
      </Col>
    </Form.Group>
  );
};

const buildInput = (component) => {
  return (
    <Form.Group as={Row} controlId={component.name}>
      <Form.Label column sm="2">
        {component.name}
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="" />
      </Col>
    </Form.Group>
  );
};

const buildSection = (section) => {
  return (
    <div>
      <br />
      <Card>
        <Card.Header as="h5">{section.name}</Card.Header>
        <Card.Body>
          <Form>
            <div class="form-group">
              {section.components.map((component) => {
                return components[component.type](component);
              })}
            </div>
          </Form>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const components = {
  select: buildSelect,
  input: buildInput,
};

let buildConfig = (config) => {
  if (!config.sections || config.sections.length === 0) {
    return <div></div>;
  } else {
    return (
      <Row>
        <Col>
          {config.sections.map((section) => {
            return buildSection(section);
          })}
        </Col>
      </Row>
    );
  }
};

export default function Config() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/config")
      .then((results) => results.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  return <div>{buildConfig(state)}</div>;
}
