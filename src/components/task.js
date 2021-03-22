import React from "react";

const Task = props => {
    const title = props.task.title;
    const description = props.task.description;
    const created = new Date(props.task.createdAt);
    const assigned = props.task.assigned;

    debugger;
    
    return (
        <div>
            <p>{`Title: ${title}`}</p>
            <p>{`Description: ${description}`}</p>
            <p>{`Created: ${created}`}</p>
            <p>{`Assigned to: ${assigned}`}</p>
        </div>
    )
}

export default Task;