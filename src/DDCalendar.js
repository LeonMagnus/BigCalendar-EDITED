import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import globalize from 'globalize'


require('globalize/lib/cultures/globalize.culture.fr')


/*
  * function that returns DnDCalendar or Calendar based on a boolean 
  *The returned Calendar will either contain Drag and Drop or not
*/
const DnD = dnd => dnd ? withDragAndDrop(Calendar) : Calendar
const localizer=Calendar.globalizeLocalizer(globalize);

const dnd = false

//Call to DnD function
const DnDCalendar = DnD(dnd)

class DDCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title",
        worker: "worker1"
      },
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
      }
    ]
  };
  


  onEventResize = ({ event, start, end}) => {
    console.log(event);
    this.setState(state => {
      event.start = start;
      event.end = end;  
      return { events: state.events };
    });
  };


   onEventDrop = ({ event, start, end }) => {
    this.setState(state => {
      event.start = start;
      event.end = end;
      return { events: state.events};
    });
  }; 


  onView=(str)=> {
    this.setState(state => {
      state.view = str;
      return state
    })
  }
  
  
  aff=(a,b)=>{
    console.log(a,b);
  }

  /*
    * EventPropGetter: Function that returns an Object of className or style props to be applied to the event node
    * event argument: The event object
    
  */
 eventPropGetter = (event) => {
  const color = this.state.workers.filter(worker => worker.name === event.worker)[0].color
  return {style: {backgroundColor: color}}
  
 }
  

  render() {
    return (
        <DnDCalendar	
        messages={{more:"plus", previous: "Précedent", agenda:"Agenda",allDay:"All Day",date:"Date", today: "Aujourd'hui", day:"Jour",event:"Event",month:"Mois",next:"Suivant", week: "Semaine"}}
	        culture="fr"
          localizer={localizer}

          //eventPropGetter
          eventPropGetter={this.eventPropGetter}
          
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          drilldownView="week"
          onSelectSlot={this.aff}
          onView={this.onView}
          showMultiDayTimes
          //onSelectEvent={this.aff}
          selectable
          resizable
          style={{ height: "100vh" }}          
        />
    );
  }
}

export default DDCalendar;

