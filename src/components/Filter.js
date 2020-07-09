import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./Display.css";
class Filter extends Component {
  render() {
    const { action3 } = this.props;
    return (
      <ListGroup className="list-group">
        <div style={{ display: "inline-block" }}>
          <Button
            className="btn"
            variant="outline-secondary"
            onClick={() => action3("")}
          >
            All
          </Button>
          {"  "}
          <Button
            className="btn"
            variant="outline-secondary"
            onClick={() => action3("active")}
          >
            Active
          </Button>
          {"  "}
          <Button
            className="btn"
            variant="outline-secondary"
            onClick={() => action3("completed")}
          >
            Completed
          </Button>
          {"  "}
        </div>
      </ListGroup>
    );
  }
}

export default Filter;
