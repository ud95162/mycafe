import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ReactSvgPieChart from "react-svg-piechart";
/*https://reactjsexample.com/a-react-component-for-showing-speedometer-like-gauge-using-d3/ */
import ReactSpeedometer from "react-d3-speedometer";
import { Config } from "./Config";
import firebase from "firebase";

/*const data = [
  { title: "Data 1", value: 100, color: "#22594e" },
  { title: "Data 2", value: 60, color: "#2f7d6d" }
];*/

class Crowd extends Component {
  state = {};
  constructor() {
    super();

    this.app = firebase.initializeApp(Config);
    this.database = this.app
      .database()
      .ref()
      .child("count");

    this.state = {
      speed: null
    };
  }
  componentDidMount() {
    this.database.on("value", snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    var database = firebase.database();
    return (
      <div id="divCrowd">
        <h6>Crowd of the Canteen</h6>
        <ReactSpeedometer
          id="speedMeter"
          maxValue={10}
          value={this.state.speed}
          needleColor="blue"
          startColor="green"
          middleColor="yellow"
          endColor="red"
          needleTransitionDuration={24000}
          needleTransition="easeElastic"
          needleHeightRatio={0.5}
          maxSegmentLabels={5}
          segments={500}
          width={250}
          height={200}
        />
      </div>
    );
  }
}

/*<ReactSpeedometer /> */
/* (
        <CircularGaugeComponent id="circulargauge">
          <AxesDirective>
            <AxisDirective>
              <PointersDirective>
                <PointerDirective value={35} />
              </PointersDirective>
            </AxisDirective>
          </AxesDirective>
        </CircularGaugeComponent>
      ),
      document.getElementById("circulargauge") */

/* <div id="divCrowd">
        <h5>Crowd of the Canteen</h5>
        <ReactSvgPieChart
          data={data}
          // If you need expand on hover (or touch) effect
          expandOnHover
          // If you need custom behavior when sector is hovered (or touched)
          onSectorHover={(d, i, e) => {
            if (d) {
              console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e);
            } else {
              console.log("Mouse leave - Index:", i, "Event:", e);
            }
          }}
        />
        </div> */

export default Crowd;
