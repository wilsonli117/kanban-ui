import * as TaskAPIUtil from "../util/tasks_api_util";

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const receiveTasks = tasks => {
    return {
        type: RECEIVE_TASKS,
        tasks
    }
}

export const receiveTask = task => {
    return {
        type: RECEIVE_TASK,
        task
    }
}

export const removeTask = taskId => {
    return {
        type: REMOVE_TASK,
        taskId
    }
}

export const fetchTasks = taskIds => dispatch => {
    return TaskAPIUtil.fetchTasks(taskIds)
        .then(res => {
            return dispatch(receiveTasks(res.data))
        })
        .catch(error => console.log(error))
}

export const fetchTask = taskId => dispatch => {
    return TaskAPIUtil.fetchTask(taskId)
        .then(res => {
            return dispatch(receiveTask(res.data.task));
        })
        .catch(error => console.log(error))
}

export const addTask = task => dispatch => {
    return TaskAPIUtil.addTask(task)
        .then(res => {
            return dispatch(receiveTask(res.data));
        })
        .catch(error => console.log(error))
}

export const deleteTask = taskId => dispatch => {
    return TaskAPIUtil.deleteTask(taskId)
        .then(() => {
            return dispatch(removeTask(taskId));
        })
}