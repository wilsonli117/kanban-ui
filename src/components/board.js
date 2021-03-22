import React from "react";
import "../stylesheets/board.css";

const Board = props => {
    const name = props.board.name
    const buckets = props.board.buckets;
    const tasks = props.board.tasks;

    const columns = buckets.map(bucketName => {
        return (
            <li>
                <h2>{bucketName}</h2>
                <ul className="task-list">

                </ul>
            </li>
        )
    })

    return (
        <div className="board">
            <h1 className="board-name">{name}</h1>
            <ul className="board-columns">
                {columns}
            </ul>
        </div>
          
    )
}

export default Board;