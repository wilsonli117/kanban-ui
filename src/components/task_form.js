import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions/task_actions";
import "../stylesheets/taskform.css"

const TaskForm = (props) => {
    const dispatch = useDispatch();

    const authorId = useSelector(state => state.session.user.id)
    const boardId = props.boardId;
    const bucket = props.bucket;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assigned, setAssigned] = useState("")

    const handleChange = (field, e) => {
        if (field === "title") {
            setTitle(e.currentTarget.value);
        } else if (field === "description") {
            setDescription(e.currentTarget.value);
        } else {
            setAssigned(e.currentTarget.value);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (assigned === "") setAssigned(null);
        dispatch(addTask({ title, description, author_id : authorId, board_id : boardId, bucket  }))
        setTitle("");
        setDescription("");
        setAssigned("");
    }

    return (
        <form onSubmit={handleSubmit} className="taskform">
            <label htmlFor="title">Title
                <input id="title" value={title} onChange={(e) => handleChange("title", e)}></input>
            </label>
            <label htmlFor="description">Description
                <input id="description" value={description} onChange={(e) => handleChange("description", e)}></input>
            </label>
            <label htmlFor="assigned">Assign to
                <input id="assigned" value={assigned} onChange={(e) => handleChange("assigned", e)}></input>
            </label>
            <button>Add Task</button>
        </form>
    )
}

export default TaskForm;