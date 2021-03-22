import React from "react";

const Board = props => {
    const name = props.board.name;
    const buckets = props.board.buckets;

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
        <>
            <h1>{name}</h1>
            <ul className="">
                {columns}
            </ul>
        </>
    )
}