import { combineReducers } from "redux";
import boards from "./boards_reducer";
import tasks from "./tasks_reducer";

export default combineReducers({
    boards,
    tasks
});