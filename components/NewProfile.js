import React, { Component } from "react";

import Ripples from "react-ripples";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SplitButton from "react-bootstrap/SplitButton";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class NewProfile extends Component {
  state = {
    profileName: "Udayanga U.P.H."
  };

  setProfName() {}

  render() {
    return (
      <div id="newDivProfile">
        <DropdownButton id="dropdownProfile" title={this.state.profileName}>
          <Dropdown.Item id="item" as="button">
            Profile
          </Dropdown.Item>
          <Dropdown.Item id="item" as="button">
            Settings
          </Dropdown.Item>
          <Dropdown.Item id="item" as="button">
            Wallet
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item id="item" as="button">
            Sign Out
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default NewProfile;
