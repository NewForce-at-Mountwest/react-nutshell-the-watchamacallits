const remoteURL = "http://localhost:5002"

const EventManager = {
  get(id) {
    return fetch(`${remoteURL}/events/${id}`)
    .then(result => result.json())
  },

  getAll(userId) {
    //refactor this fetch call to ask for animals that match the logged in users id
    return fetch(`${remoteURL}/events?userId=${userId}`)
    .then(result => result.json())
  },

  delete(id) {
    return fetch(`${remoteURL}/events/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newEvent) {
    //refactor this fetch call to make sure the new animal has the employeesId of the logged in user
    return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
    }).then(data => data.json())
  },

  update(editedEvent) {
    //refactor this fetch call to make sure the edited animal has the employeesId of the logged in user
    return fetch(`${remoteURL}/events/${editedEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEvent)
    }).then(data => data.json());
  },

  patch(editedEvent) {
    return fetch(`${remoteURL}/events/${editedEvent.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: `${editedEvent.name}`})
      }).then(data => data.json());
}

}

export default EventManager