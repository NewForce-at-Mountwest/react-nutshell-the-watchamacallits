import React, { Component } from "react"
import EventManager from "../../modules/EventManager"
import "./EventForm.css"

class EventEditForm extends Component {
    //set the initial state
    state = {
        eventName: "",
        eventDate: "",
        eventTime: "",
        eventLocation: "",
        eventDescription: "",
        eventUserId: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    //component that runs when submit button is clicked
    updateExistingEvent = evt => {
        //the evt can be called anything it stands for event and the preventDefault needs 
        //to be called to keep it from refreshing because the button is in a form       
        //next two lines prevent clicking the button more than once
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEvent = {
            id: this.props.match.params.eventId,
            name: this.state.eventName,
            date: this.state.eventDate,
            time: this.state.eventTime,
            location: this.state.eventLocation,
            description: this.state.eventDescription,
            userId: this.unchangedElements.eventUserId
          
        };

        EventManager.update(editedEvent)
            .then(() => this.props.history.push("/events"))
    }

    unchangedElements = {}

    componentDidMount() {
        //Getting eventId from route
        //runs on page load
        //getting information to prepopulate the form fields

        EventManager.get(this.props.match.params.eventId)
            .then(event => {
                this.unchangedElements.eventUserId = event.userId
                this.setState({
                    eventName: event.name,
                    eventDate: event.date,
                    eventTime: event.time,
                    eventLocation: event.location,
                    eventDescription: event.description,
                    //loadingstatus false means button active again
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="eventName"
                                value={this.state.eventName}
                            />
                            <label htmlFor="eventName">Event name:</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="eventDate"
                                value={this.state.eventDate}
                            />
                            <label htmlFor="eventDate">Date:</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="eventTime"
                                value={this.state.eventTime}
                            />
                            <label htmlFor="eventDate">Time:</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="eventLocation"
                                value={this.state.eventLocation}
                            />
                            <label htmlFor="eventLocation">location:</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="eventDescription"
                                value={this.state.eventDescription}
                            />
                            <label htmlFor="eventDescription">Description:</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEvent}
                                className="btn btn-primary"
                            >Save Changes</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EventEditForm