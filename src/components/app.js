import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import SessionForm from "./session_form";
import BoardForm from "./board_form";
import Board from "./board";
import { fetchUserBoards } from "../actions/board_actions";
import "../stylesheets/app.css"

const App = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.session.isLoggedIn);
    const currentUser = useSelector(state => state.session.user);
    useEffect(() => {
        if(isLoggedIn) {
            dispatch(fetchUserBoards(currentUser.id));
        }
    }, [currentUser])
    const boards = useSelector(state => state.entities.boards);
    const [openBoard, setOpenBoard] = useState(Object.values(boards)[0]);

    const handleOpenBoard = e => {
        const index = parseInt(e.target.getAttribute("index"))
        setOpenBoard(Object.values(boards)[index]);
    }

    const userBoardNames = Object.values(boards).map((board, idx) => {
        return (
            <div className="board-list-item">
                <li key={idx} index={idx} onClick={handleOpenBoard}>{board.name}</li>
                <i class="far fa-times-circle"></i>
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