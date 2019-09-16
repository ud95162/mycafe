import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class CanteenMap extends Component {
  state = {};

  render() {
    return (
      <div id="cMap">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAjHZGGhYGb77SVI25UIbaJ4vTvpyjyUzY"
})(CanteenMap);
