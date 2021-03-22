import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SessionForm from "./session_form";
import { fetchUserBoards } from "../actions/board_actions";

const App = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)
    if (currentUser.username) {
        dispatch(fetchUserBoards(currentUser.id))
    }  
    const boards = useSelector(state => state.entities.boards);
    const [openBoard, setOpenBoard] = useState(boards[0]);

    const userBoardNames = boards.map(board => {
        return (
            <li>{board.name}</li>
        )
    })



    return (
        <>
            <div className="sidebar">
                <div>
                    <SessionForm currentUser={currentUser.username}/>
                    <ul className="user-boards">
                        { currentUser.username ?  userBoardNames : null }
                    </ul>
                </div>
                <div className="Create" >

                </div>
            </div>
        </>
    )
}

export default App;