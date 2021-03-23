import React from "react";
import { useDispatch } from "react-redux";
import {  dateFormat, timeFormat } from "../util/date_util";
import { deleteTask } from "../actions/task_actions";
import "../stylesheets/task.css";

const Task = props => {
    const dispatch = useDispatch();
    const title = props.task.title;
    const description = props.task.description;
    const created = new Date(props.task.createdAt);
    const assigned = props.task.assigned;

    const removeTask = e => {
        const taskId = e.target.getAttribute("taskid");
        dispatch(deleteTask(taskId))
    }
    
    return (
        <div className="task">
            <div className="task-info">
                <p>{`Title: ${title}`}</p>
                <p>{`Description: ${description}`}</p>
                <p>{`Created: ${dateFormat(created)} at ${timeFormat(created)}`}</p>
                <p>{`Assigned to: ${assigned ? assigned : "No one"}`}</p>
            </div>
            <i taskid={props.task._id} onClick={removeTask} className="far fa-times-circle"></i>
        </div>
    )
}

export default Task;