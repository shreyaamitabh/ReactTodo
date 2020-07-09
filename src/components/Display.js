import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./Display.css";
import Form from "react-bootstrap/Form";
class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
  }
  render() {
    const { todos, action2, action4 } = this.props;

    return (
      <ListGroup className="list-group">
        {todos.map((todo) => {
          return (
            <ListGroup.Item key={todo.id} class="list-container">
              <Form.Check
                className="list-item"
                type="checkbox"
                onClick={() => action2(todo.id)}
              />
              <p
                className="list-item"
                style={{
                  textDecoration:
                    todo.status === "completed" ? "line-through" : "none",
                }}
              >
                {todo.work}
                <span class="close" onClick={() => action4(todo)}>
                  x
                </span>
              </p>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default Display;
