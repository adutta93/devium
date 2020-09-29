import React from "react";
import { connect } from "react-redux";
import "./index.css";
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div
      id="openModal-about"
      key={alert.id}
      className={`alert modalDialog alert-${alert.alertType} `}
    >
      <div>
        <a href="#close" title="Close" class="close">
          X
        </a>
        <h2>Modal</h2>
        <p>{alert.msg}</p>
      </div>
    </div>
  ));

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
