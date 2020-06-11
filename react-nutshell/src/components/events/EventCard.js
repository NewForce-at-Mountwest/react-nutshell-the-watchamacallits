import React, { Component } from 'react';
import './Event.css'
import { Link } from "react-router-dom";

class EventCard extends Component {

    getCurrentDate() {
        var tempDate = new Date();
        const currYear = tempDate.getFullYear()
        var currMonth = tempDate.getMonth()
        currMonth < 10 ? currMonth = '0' + (tempDate.getMonth() + 1) : currMonth = (tempDate.getMonth() + 1)
        var currDayofMonth = tempDate.getDate()
        currDayofMonth < 10 ? currDayofMonth = '0' + (tempDate.getDate()) : currDayofMonth = (tempDate.getDate())
        const currDate = currMonth + '/' + currDayofMonth + '/' + currYear
        return currDate;
    }

    render() {

        const showEvent = this.props.event.date > this.getCurrentDate()
        // console.log(this.props.event.date)
        // console.log(showEvent)
        return (
            <>
                {showEvent ?
                    <article className="event-card">
                        <div className="cards-content">
                        <div className="card-content">
                            <h3>Event: <span className="card-eventname">{this.props.event.name}</span></h3>
                            <h5><span className="card-eventdescription">{this.props.event.description}</span></h5>
                            <p>Date: {this.props.event.date}</p>
                            <p>Time: {this.props.event.time}</p>
                            <p>Location: {this.props.event.location}</p>
                            <Link to={`/events/${this.props.event.id}/edit`}><button>Edit</button></Link>
                        </div>
                        </div>
                    </article>
                    :
                    null} </>
           )
    }
}

export default EventCard;