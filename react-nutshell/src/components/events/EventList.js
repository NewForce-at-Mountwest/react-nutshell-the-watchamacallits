import React, { Component } from 'react'
//import the components we will need
import EventCard from './EventCard'
import EventManager from '../../modules/EventManager'
import './Event.css'

class EventList extends Component {
    //define what this component needs to render
    state = {
        events: [],
    }

    componentDidMount() {
        console.log("EVENT LIST: ComponentDidMount");
        //getAll from EventManager and hang on to that data; put it in state
        EventManager.getAll(JSON.parse(localStorage.getItem("credentials")).userId)
            .then((events) => {
                console.log(events)
                
               this.setState({
                    events: events
                })
            })
    }
    /*using .map instead of foreach*/
    render() {
        console.log("EVENT LIST: Render")
        
        return (
            //add this button above your display of event cards
            <>
            <div>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/events/new") }}>
                        Add Event
                    </button>
                </section>
                              
                <div className="container-cards">
                    {this.state.events.sort((a, b) => { return new Date(a.date) - new Date(b.date)}).map((currentEventInLoop) => {
                        return <EventCard
                        key={currentEventInLoop.id}
                        event={currentEventInLoop}
                        {...this.props}
                    />
                    })}
                </div>
                </div>
            </>
           
        
        )}}

export default EventList