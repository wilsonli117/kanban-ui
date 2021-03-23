import React, { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./task_form";
import Task from "./task";
import "../stylesheets/board.css";

const Board = props => {
    const name = props.board.name
    const buckets = props.board.buckets;
    const tasks = useSelector(state => state.entities.tasks);

    const findTasksForBucket = bucketName => {
        const sortedTasks = Object.values(tasks).filter(task => {
            if (task.bucket === bucketName) return task;
        })

        return sortedTasks.map(task => {
            return <Task key={task.id} task={task}></Task>
        })
    }

    const columns = buckets.map((bucketName, idx) => {
        return (
            <li key={idx}>
                <h2>{bucketName}</h2>
                <ul className="task-list">
                    {findTasksForBucket(bucketName)}
                </ul>
                <TaskForm boardId={props.board._id} bucket={bucketName} />
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