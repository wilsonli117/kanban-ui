import axios from "axios";

export const fetchTasks = taskIds => {
    const payload = {
        taskIds
    }

    return axios.post("/api/tasks", payload )
}

export const fetchTask = taskId => {
    return axios.get("/api/tasks", { taskId })
}

export const addTask = task => {
    return axios.post("api/tasks", task)
}

export const deleteTask = taskId => {
    const payload = {
        taskId : taskId
    }
    return axios.delete("api/boards", { data: payload })
}