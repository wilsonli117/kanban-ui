import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SessionForm from "./session_form";
import BoardForm from "./board_form";
import { fetchUserBoards } from "../actions/board_actions";

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
    const userBoardNames = Object.values(boards).map((board, idx) => {
        return (
            <li key={idx}>{board.name}</li>
        )
    })

    return (
        <>
            <div className="sidebar">
                <div>
                    <SessionForm currentUser={currentUser.username}/>
                    <ul className="user-boards">
                        { isLoggedIn ?  userBoardNames : null }
                    </ul>
                </div>
                { isLoggedIn ? <BoardForm userId={currentUser.id}/> : null }
            </div>
        </>
    )
}

export default App;