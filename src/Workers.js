import React, {Component} from 'react'


class Workers extends Component {
    state = {
      workers: this.props.workers,
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
            this.state.workers.map(worker => <div key={worker.name}>
            <input type="checkbox"  defaultChecked={worker.checked} onChange={this.onChange} name="workers"  value={worker.name} />{worker.name} 
            <input type="color" id={worker.name} onChange={this.onColorChange} name="color" defaultValue={worker.color}/> 
            </div>)
        )
    }
}
export default Workers
