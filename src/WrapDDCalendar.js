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
            worker: "worker2",
            color: "red"
          },{
            start: new Date('04/5/2019 14:0:0'),
            end: new Date('04/6/2019 1:0:0'),
            title: "Second event",
            allDay: false,
            worker: "worker1",
            color: "blue"
          },
        ],
        allEvents: [
          {
          start: new Date('04/5/2019 14:0:0'),
          end: new Date('04/6/2019 1:0:0'),
          title: "Second event",
          allDay: false,
          worker: "worker2",
          color: "red"
        },{
          start: new Date('04/5/2019 14:0:0'),
          end: new Date('04/6/2019 1:0:0'),
          title: "Second event",
          allDay: false,
          worker: "worker1",
          color: "blue"
        },
      ],
        //Dictionnary assigning a color to each worker
        workers: [
          {
            "name": "worker1",
           "color":"red",
           "checked":true
          },
          {
            "name":"worker2",
           "color": "green",
           "checked":true
          },
          {
              "name": "",
              "color": "black",
              "checked":true
          }
        ],
        checkedWorkers: ["worker1", "worker2", "worker3"]
      };

    onNewEvent = e => {
        this.setState(state => {
            state.events.push(e)
            return state
        })
        
    }
    onColorChange = eventObject => {
      const e = eventObject.target
        this.setState(state => {
            state.workers.filter(worker => worker.name === e['id'])[0].color= e.value;
          return state;
          })
    }

    onEventResize = () => {
        this.setState(state => {
          event.start = start;
          event.end = end;  
          return { events: state.events };
        });
    }

    onEventDrop = (event, start, end) => {
      this.setState(state => {
        event.start = start;
        event.end = end;
        return { events: state.events};
      });
    }

   onChange = events =>{
     const e=events;
      this.setState(state=>{
        state.events=e;
      return state;}
      )

   } 
   onView = str => {
    this.setState(state => {
      state.view = str;
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
             <Workers  onColorChange={this.onColorChange} onChange={this.onChange} allEvents={this.state.allEvents} workers={this.state.workers}/>
            </div>
        </div>
        </div>
  )
}
}

export default WrapDDCalendar