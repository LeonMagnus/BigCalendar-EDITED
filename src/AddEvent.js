import React, {Component} from 'react'
import Popup from 'reactjs-popup'


class AddEvent extends Component {
    newEvent = {}
    today(d) {
        return `${String(Number(d.getYear()) + 1900)}-${d.getMonth() < 9 ? '0' : ''}${String(Number(d.getMonth())+1)}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}`
    }
    tomorrow(d) {
        d.setDate(d.getDate()+1)
        return `${String(Number(d.getYear()) + 1900)}-${d.getMonth() < 9 ? '0' : ''}${String(Number(d.getMonth())+1)}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}`
    }     
    onNewEvent = () => {
        if (!this.newEvent.title) this.newEvent.title = 'Untitled Event'
        if (this.props.workers.filter(worker => worker === this.newEvent.worker) == [] ) this.newEvent.worker = ''
        this.props.onNewEvent(this.newEvent)
    }
    onTitleChange = (e) => {
        this.newEvent.title = e.target.value
        
    }
    onStartChange = (e) => {
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
                return (<form>
                <h1>New Event</h1>
                <label htmlFor='title'>Event Title</label><input type="text" id='title' onChange={this.onTitleChange}/>

                <br/>
                
                <label htmlFor="begin">Beginning date</label> <input type="datetime-local" name="begin" id="begin" defaultValue={this.today(this.newEvent.start)} onChange={this.onStartChange}/>

                <label htmlFor="end">End date</label> <input type="datetime-local" name="end" id="end" defaultValue={this.tomorrow(new Date())} onChange={this.onEndChange}/>
                
                <br/>
                
                <label htmlFor="worker">Worker</label><input type="text" id='worker' onChange={this.onWorkerChange}/>
                
                <button onClick={e => {
                    e.preventDefault()
                    this.onNewEvent()
                    close()
                }}>Submit event</button>
            
            </form>
            )}
        }
          </Popup>
        )
    } 
}
export default AddEvent