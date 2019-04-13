/* TODO:
  * Set up toggling DnD on/off ✔
  * Set up a color system ✔
  * Adding an event
  * Displaying workers and possibility to  only choose one
  * Setting colors for each worker
*/

import "./App.css";
import React, { Component } from "react";
import WrapDDCalendar from './WrapDDCalendar'
class App extends Component {

  render() {
    return (
    <div className="App">
      <WrapDDCalendar />
    </div>
  )
}
}

export default App;