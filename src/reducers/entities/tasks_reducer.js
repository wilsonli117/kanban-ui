import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK } from "../../actions/task_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TASKS:
            const tasks = {};
            action.tasks.forEach(task => {
                tasks[task._id] = task
            })
            return tasks;
        case RECEIVE_TASK:
            newState[action.task._id] = action.task;
            return newState;
        case REMOVE_TASK:
            delete newState[action.taskId];
            return newState;
        default:
            return state;
    }
}