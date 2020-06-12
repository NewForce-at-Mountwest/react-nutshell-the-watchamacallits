import React, { Component } from 'react';
import EventManager from '../../modules/EventManager';
import './EventForm.css'

class EventForm extends Component {
    state = {
        eventName: "",
        eventDate: "",
        eventTime: "",
        eventLocation:"",
        eventDescription:"",
        eventUserId: null,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.eventName === "" || this.state.eventDate === "") {
            window.alert("Please input an Event name and date");
        } else {
            this.setState({ loadingStatus: true });
            const event = {
                name: this.state.eventName,
                date: this.state.eventDate,
                time: this.state.eventTime,
                location:this.state.eventLocation,
                description:this.state.eventDescription,
                userId:JSON.parse(localStorage.getItem("credentials")).userId
        
            };

            // Create the event and redirect user to event list
            EventManager.post(event)
            .then(() => this.props.history.push("/events"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="eventName"
                        placeholder="Event name"
                        />
                        <label htmlFor="eventName">Event:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="eventDate"
                        placeholder="MM/DD/YYYY"
                        />
                        <label htmlFor="eventDate">Event:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="eventTime"
                        placeholder="Enter Time"
                        />
                        <label htmlFor="eventTime">Time:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="eventLocation"
                        placeholder="Location"
                        />
                        <label htmlFor="eventLocation">Location:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="eventDescription"
                        placeholder="Description"
                        />
                        <label htmlFor="eventDescription">Description:</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEvent}
                        >Save</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default EventForm