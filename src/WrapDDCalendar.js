/* TODO:
  * Set up toggling DnD on/off
  * Set up a color system
  * Adding an event

*/

import React, { Component } from "react";
import DDCalendar from "./DDCalendar";
import "./DD.css"
import Workers from "./Workers"
import AddEvent from './AddEvent'

class WrapDDCalendar extends Component {
    state = {
        events: [
            {
            start: new Date('04/5/2019 14:0:0'),
            end: new Date('04/6/2019 1:0:0'),
            title: "Second event",
            allDay: false,
            worker: "worker2"
          },{
            start: new Date('04/5/2019 14:0:0'),
            end: new Date('04/6/2019 1:0:0'),
            title: "Second event",
            allDay: false,
            worker: "worker1"
          },
        ],
        //Dictionnary assigning a color to each worker
        workers: [
          {
            "name": "worker1",
           "color":"red"
          },
          {
            "name":"worker2",
           "color": "green"
          },
          {
              "name": "",
              "color": "black"
          }
        ]
      };

    onNewEvent = (e) => {
        this.setState(state => {
            state.events.push(e)
            return state
        })
        
    }
  render() {
    return (
        <div className="wrapper">
        <div className="ddwrapper">
            <DDCalendar events={this.state.events} workers={this.state.workers}/>
        </div>
        <div className="sidebar">
            <div className="addEvent">
                <AddEvent onNewEvent={this.onNewEvent} workers={this.state.workers}/>
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