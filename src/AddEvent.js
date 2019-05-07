import React, {Component} from 'react'
import Popup from 'reactjs-popup'
import './addEvent.css'


class AddEvent extends Component {
    state = {
        warn:false
    }
    newEvent = {}
    today(d) { //Returns a formatted string containing the event's default starting date (to be put in the event object)
        return `${String(Number(d.getYear()) + 1900)}-${d.getMonth() < 9 ? '0' : ''}${String(Number(d.getMonth())+1)}-${d.getDate() < 10 ? '0' : ''}${d.getDate()}T${d.getHours() < 10 ? '0' : ''}${d.getHours()}:${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}`
    }
    tomorrow(d) {
        //Returns a formatted string containing the event's default ending date (to be put in the event object)
        d.setDate(d.getDate()+1)
        return `${String(Number(d.getYear()) + 1900)}-${d.getMonth() < 9 ? '0' : ''}${String(Number(d.getMonth())+1)}-${d.getDate() < 10 ? '0' : ''}${d.getDate()}T${d.getHours() < 10 ? '0' : ''}${d.getHours()}:${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}`
    }     
    onNewEvent = () => {
        //Gets called whenever an event is created
        if (!this.newEvent.title) this.newEvent.title = 'Untitled Event'
        this.newEvent.show = true
        this.props.onNewEvent(this.newEvent)
    }
    onTitleChange = (e) => {
        this.newEvent.title = e.target.value
        
    }
    onStartChange = (e) => {
        //Whenever the starting date is modified
        if (new Date(e.target.value) > this.newEvent.end) {
            this.newEvent.start.setDate(this.newEvent.end.getDate() - 1)
            e.target.value = this.today(this.newEvent.end)
        }
        this.newEvent.start = new Date(e.target.value)
    }
    onEndChange = (e) => {
        if (new Date(e.target.value) < this.newEvent.start) {
            this.newEvent.end.setDate(this.newEvent.start.getDate() + 1)
            e.target.value = this.today(this.newEvent.end)
        }
        this.newEvent.end = new Date(e.target.value)
    }
    onWorkerChange = (e) => {
        this.newEvent.worker = e.target.value
    }
    onColorChange = e => {
        this.newEvent.color = e.target.value
    }
    onAllDay = e => {
        this.newEvent.allDay = e.target.value
    }
    render() {
        
        return (
            <Popup
            trigger={<button className="button">
                <span>Ajouter</span>
            </button>}
            modal
            closeOnDocumentClick
          >
            {close => {
                this.newEvent.start = new Date()
                this.newEvent.end = new Date(this.tomorrow(new Date()))
                this.newEvent.title = ''
                this.newEvent.worker = ''
                return (<div className="form-style-5"><form>
                <legend>Add Event</legend>
                    <input placeholder="Event title" type="text" id='title' onChange={this.onTitleChange}/>

                <br/>
                
                <label htmlFor="begin">Beginning date</label> <input type="datetime-local" name="begin" id="begin" defaultValue={this.today(this.newEvent.start)} onChange={this.onStartChange}/>

                <label htmlFor="end">End date</label> <input type="datetime-local" name="end" id="end" defaultValue={this.tomorrow(new Date())} onChange={this.onEndChange}/>
                
                <br/>
                <div className="labels"><input type="checkbox" name="allDay" id="allDay" onClick={this.onAllDay} /> <label htmlFor="checkbox">All day</label></div>
                <br/>
            <div className="labels"><label htmlFor="worker">Worker</label>{this.state.warn ? <label htmlFor="worker" className="error" >⚠ required</label> : null}</div><input 
                    type="text"
                    id='worker'
                    onChange={this.onWorkerChange}
                    required
                    />
                    
                <br/>
                <label htmlFor="color">Color</label><input type="color" id="color" className="field-radio primary_color" name="color" defaultValue='black' onChange={this.onColorChange} />
                <br/>
                
                <button
                    onClick={e => {
                        e.preventDefault()
                        if (this.newEvent.worker !== '') {
                            this.onNewEvent(this.newEvent)
                            close()
                            this.setState(state => {
                                state.warn = false
                                return state
                            })
                        }
                        else this.setState(state => {
                            state.warn = true
                            return state
                        })
                        }}
                    className="button"
                >Submit event</button>
            
            </form></div>
            )}
        }
          </Popup>
        )
    } 
}
export default AddEvent