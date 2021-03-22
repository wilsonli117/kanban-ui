import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import SessionForm from "./session_form";
import BoardForm from "./board_form";
import Board from "./board";
import { fetchUserBoards, deleteBoard } from "../actions/board_actions";
import { fetchTasks } from "../actions/task_actions"
import "../stylesheets/app.css"

const App = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.session.isLoggedIn);
    const currentUser = useSelector(state => state.session.user);

    const boards = useSelector(state => state.entities.boards);
    const [openBoard, setOpenBoard] = useState(Object.values(boards)[0]);
    
    useEffect(() => {
        if(isLoggedIn) {
            dispatch(fetchUserBoards(currentUser.id));
        } else {
            setOpenBoard(false);
        }
    }, [currentUser])

    useEffect(() => {
        if (openBoard) {
            dispatch(fetchTasks(openBoard.tasks))
        }
    }, [openBoard])
 

    const handleOpenBoard = e => {
        const index = parseInt(e.target.getAttribute("index"))
        setOpenBoard(Object.values(boards)[index]);
    }

    const removeBoard = e => {
        const boardId = e.target.getAttribute("boardid");
        dispatch(deleteBoard(boardId))
        setOpenBoard(false);
    }

    const userBoardNames = Object.values(boards).map((board, idx) => {
        return (
            <div key={idx} className="board-list-item">
                <li key={idx} index={idx} onClick={handleOpenBoard}>{board.name}</li>
                <i boardid={board._id} onClick={removeBoard} className="far fa-times-circle"></i>
            </div>
        )
    })

    return (
        <>
        <div className="container">
            <div className="sidebar">
                <div>
                    <SessionForm currentUser={currentUser.username}/>
                    <ul className="user-boards">
                        { isLoggedIn ?  userBoardNames : null }
                    </ul>
                </div>
                { isLoggedIn ? <BoardForm userId={currentUser.id}/> : null }
            </div>
            <div>
                { openBoard ? <Board board={openBoard}/> : null }
            </div>
        </div>
        </>
    )
}

export default App;