import React, {Component} from 'react'

class Workers extends Component {
    


    onColorChange = e=>{ 
      this.props.onColorChange(e)
         }


    onChange = event => {
      this.props.onChange(event.target.value, event.target.checked)
    }


    render() {
  


        return (
          <form className="form">
            {this.props.workers.map(worker => {
              return (<div className="div" key={worker.name}>
            <input type="checkbox"  defaultChecked={worker.checked} onChange={this.onChange} name="workers"  value={worker.name} id={worker.name} className="radio"/><label className="label" htmlFor={worker.name}>{worker.name}
              <span className="color"><input type="color" id={worker.name} className="field-radio primary_color" onChange={this.onColorChange} name="color" defaultValue={worker['color']} />
              <span className="color_val"></span></span>
          </label>
            

             
            </div>)})}
            </form>
        )
    }
}
export default Workers
