const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/tasks/${id}`).then(result => result.json())
    },
    getAll(userId) {
        return fetch(`${remoteURL}/tasks?userId=${userId}`).then(result => result.json())
    },
    // checks for complete tasks
    // i ended up writing an "if" statement, so i dont need this but still have it if i want to switch it up
    filterGetAll(userId) {
        return fetch(`${remoteURL}/tasks?complete=false&userId=${userId}`).then(result => result.json())
    },

    //   patch for complete task checkmark
    patch(tasksId) {
        return fetch(`http://localhost:5002/tasks/${tasksId}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ "complete": true }) })
    },

    // this is for the new task form
    post(newTask) {
        return fetch(`${remoteURL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        }).then(data => data.json())
    },

    // task edit method
    update(editedTask) {
        return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTask)
        }).then(data => data.json());
    }






}


