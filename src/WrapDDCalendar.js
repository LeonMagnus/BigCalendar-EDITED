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
import "./checkbox.css"

class WrapDDCalendar extends Component {
    state = {
        events: [
            {
            id: Symbol(),
            start: new Date('04/5/2019 14:0:0'),
            end: new Date('04/6/2019 1:0:0'),
            title: "Second event",
            allDay: false,
            worker: "worker1",
            color: "#ff0000",
            show: true
          },{
            id: Symbol(),
            start: new Date('04/5/2019 14:0:0'),
            end: new Date('04/6/2019 1:0:0'),
            title: "Second event",
            allDay: false,
            worker: "worker2",
            color: "#0000ff",
            show: true
          },
          {
            id: Symbol(),
            start: new Date('04/5/2019 14:0:0'),
            end: new Date('04/6/2019 1:0:0'),
            title: "Second event",
            allDay: false,
            worker: "worker1",
            color: "#ff0000",
            show: true
          }
        ]
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
            state.events = state.events.map(event => {
              if (event.worker === e['id']) {
                event.color = e.value
              }
              return event
            })
          return state;
          })
    }

    onEventResize = (event, start, end) => {
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
// Whenever the checked status of an event is changed
   onChange = (name, checked) =>{
     this.setState(state => {
       state.events.filter(e => e.worker === name).map(e => e.show = checked)
       return state;
     })
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
            <DDCalendar
            events={this.state.events.filter(event => event.show)}
            workers={this.state.workers}
            onEventResize={this.onEventResize}
            onEventDrop={this.onEventDrop}
            onView={this.onView}
            />
        </div>
        <div className="sidebarwrapper">
            <div className="addEvent">
                <AddEvent
                onNewEvent={this.onNewEvent}
                workers={this.state.workers}
                />
            </div>
            <div className="workers">
             <Workers
               onColorChange={this.onColorChange}
               onChange={this.onChange} 
               events={this.state.events} 
               workers={
                 this.state.events.map(event => {
                return {
                  name:event.worker,
                  color:event.color,
                  checked: true
                }
              }
              ).filter((worker, count, workers) => !workers.slice(0,count).map(worker => worker.name).includes(worker.name))
              }
             />
            </div>
        </div>
        </div>
  )
}
}

export default WrapDDCalendar
