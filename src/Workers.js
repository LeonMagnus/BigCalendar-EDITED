import React, {Component} from 'react'

class Workers extends Component {
    state = {
      workers: this.props.allEvents.map(event => {return {name:event.worker, color:event.color, checked: true}}).filter((worker, count, workers) => !workers.slice(0,count).includes(worker)),
      
      allEvents: this.props.allEvents,
      checkedWorkers: ["worker1", "worker2",""]
    }


    onColorChange = e=>{ 

      this.props.onColorChange(e)
         }


    onChange = (event)=>{
      event.target.checked?
      
      this.state.checkedWorkers.push(event.target.value):
      this.state.checkedWorkers=this.state.checkedWorkers.filter(worcker=>worcker !==event.target.value)

      let e= this.state.allEvents.filter(workers=> this.state.checkedWorkers.includes(workers.worker))
      
      this.props.onChange(e)
    }


    render() {
  


        return (
          <form className="form">
            {this.state.workers.map(worker => {
              return (<div className="div" key={worker.name}>
            <input type="checkbox"  defaultChecked={worker.checked} onChange={this.onChange} name="workers"  value={worker.name} id={worker.name} className="radio visuallyhidden"/><label className="label" htmlFor={worker.name}>{worker.name}
              <span className="color"><input type="color" id={worker.name} className="field-radio primary_color" onChange={this.onColorChange} name="color" defaultValue={worker['color']} />
              <span className="color_val"></span></span>
          </label>
            

             
            </div>)})}
            </form>
        )
    }
}
export default Workers
