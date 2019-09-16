import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

class NewCanteen extends Component {
  state = {};

  render() {
    return (
      <div id="divNewCanteen">
        <DropdownButton id="dropdown" title="Available Canteens">
          <Dropdown.Item id="item" as="button">
            Science Faculty Canteen
          </Dropdown.Item>
          <Dropdown.Item id="item" as="button">
            Art Faculty Canteen
          </Dropdown.Item>
          <Dropdown.Item id="item" as="button">
            Staff Canteen
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}
export default NewCanteen;
