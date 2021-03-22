import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "../actions/board_actions";

const BoardForm = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const userId = props.userId;

    const handleChange = e => {
        setName(e.currentTarget.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addBoard({ name, userId }))
        setName("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                <input id="name" value={name} onChange={handleChange}></input>
            </label>
            <button>Create Board</button>
        </form>
    )
}

export default BoardForm;