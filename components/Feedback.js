import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Datetime from "react-datetime";

class Feedback extends Component {
  state = { feed: null };

  handleChange = e => {
    e.preventDefault();
    this.setState({ feed: e.target.value });
  };
  clickBtn = e => {
    e.preventDefault();
    if (this.state.feed != null) {
      axios({
        method: "post",
        url: "http://localhost:8080/feed/add",
        data: { text: this.state.feed }
      })
        .then(response => {
          console.log(response);
          alert(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div id="formFeedback">
        <Form>
          <textarea
            cols="30"
            rows="5"
            placeholder="Give your feedback"
            onChange={this.handleChange}
          />{" "}
          <br />
          <Button variant="primary" size="sm" onClick={this.clickBtn}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Feedback;
