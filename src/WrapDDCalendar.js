/* TODO:
  * Set up toggling DnD on/off
  * Set up a color system
  * Adding an event

*/

import React, { Component } from "react";
import DDCalendar from "./DDCalendar";
import "./DD.css"

class WrapDDCalendar extends Component {

  render() {
    return (
        <div className="wrapper">
        <div className="ddwrapper">
            <DDCalendar/>
        </div>
        <div className="sidebar">HH</div>
        </div>
  )
}
}

export default WrapDDCalendar