/* TODO:
  * Set up toggling DnD on/off
  * Set up a color system
  * Adding an event

*/

import React, { Component } from "react";
import DDCalendar from "./DDCalendar";
import "./DD.css"
import Workers from "./Workers"

class WrapDDCalendar extends Component {

  render() {
    return (
        <div className="wrapper">
        <div className="ddwrapper">
            <DDCalendar/>
        </div>
        <div className="sidebar">
            <div className="addEvent">
            Add event
            </div>
            <div className="workers">
             <Workers />
            </div>
        </div>
        </div>
  )
}
}

export default WrapDDCalendar