import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./Display.css";
import Form from "react-bootstrap/Form";
class Input extends Component {
  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.state = {
      value: "",
    };
  }
  handleChanges(e) {
    this.setState({
      value: e.target.value,
    });
    console.log(this.state.value);
  }
  keyPress(e, action) {
    if (e.keyCode == 13) {
      this.setState({
        value: "",
      });
      action(e.target.value);
    }
  }
  render() {
    const { action } = this.props;
    return (
      <ListGroup className="list-group">
        <Form.Control
          size="lg"
          type="text"
          value={this.state.value}
          onKeyDown={(e) => this.keyPress(e, action)}
          onChange={(e) => this.handleChanges(e)}
          placeholder="What needs to be done?"
        />
      </ListGroup>
    );
  }
}

export default Input;
