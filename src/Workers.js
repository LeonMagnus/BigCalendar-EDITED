import React, {Component} from 'react'


class Workers extends Component {
    state = {
      workers: this.props.workers,
      allEvents: this.props.allEvents
    }


    onColorChange = e=>{ 

      this.props.onColorChange(e)
         }


    onChange = (event)=>{
      
    }


    render() {
  


        return (
            this.state.workers.map(worker => <div ><input type="checkbox" key={worker} defaultChecked={worker.checked} onChange={this.onChange} name="workers"  value={worker.name} />{worker.name} <input type="color" id={worker.name} onChange={this.onColorChange} name="color" defaultValue={worker.color}/> </div>)
        )
    }
}
export default Workers