import React, { Component } from "react";
import logo1 from "./logo1.jpg";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class OurLogo extends Component {
  state = {};

  render() {
    return (
      <div id="logo">
        <Container>
          <Row>
            <Col sm={3}>
              <img src={logo1} />
            </Col>
            <Col sm={9}>
              <h5
                style={{
                  float: "left",
                  paddingTop: "10px",
                  color: "white",
                  fontFamily: "Times"
                }}
              >
                My Cafe{" "}
              </h5>
              <br />
              <br />
              <h6
                style={{ float: "left", color: "white", paddingBottom: "10px" }}
              >
                The University Canteen Network
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OurLogo;
