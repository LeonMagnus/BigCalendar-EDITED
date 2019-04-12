fimport React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";




import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import globalize from 'globalize'


require('globalize/lib/cultures/globalize.culture.fr')

const localizer=Calendar.globalizeLocalizer(globalize);
const DnDCalendar = withDragAndDrop(Calendar);

class App extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      },
	    {
        start: new Date('04/5/2019 14:0:0'),
        end: new Date('04/6/2019 1:0:0'),
        title: "Second event",
        allDay: false
      },
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
  

  render() {
    return (
      <div className="App">
        <DnDCalendar	
        messages={{more:"plus",agenda:"Agenda",allDay:"All Day",date:"Date",day:"Jour",event:"Event",month:"Mois",next:"Suivant", week: "Semaine",previous:"Back"}}
	        culture="fr"
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          drilldownView="week"
          onSelectSlot={this.aff}
          onView={this.onView}
          //onSelectEvent={this.aff}
          selectable
          resizable
          style={{ height: "100vh" }}          
        />
      </div>
    );
  }
}

export default App;

