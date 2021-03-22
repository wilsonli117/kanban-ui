import * as BoardAPIUtil from "../util/boards_api_util";

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";

export const receiveBoards = boards => {
    return {
        type: RECEIVE_BOARDS,
        boards
    }
}

export const receiveBoard = board => {
    return {
        type: RECEIVE_BOARD,
        board
    }
}

export const removeBoard = boardId => {
    return {
        type: REMOVE_BOARD,
        boardId
    }
}

export const fetchUserBoards = userId => dispatch => {
    return BoardAPIUtil.fetchUserBoards(userId)
        .then(res => {
            return dispatch(receiveBoards(res.data))
        })
        .catch(error => console.log(error))
}

export const fetchBoard = boardIds => dispatch => {
    return BoardAPIUtil.fetchBoard(boardIds)
        .then(res => {
            return dispatch(receiveBoard(res.data.board));
        })
        .catch(error => console.log(error))
}

export const addBoard = board => dispatch => {
    return BoardAPIUtil.addBoard(board)
        .then(res => {
            return dispatch(receiveBoard(res.data));
        })
        .catch (error => console.log(error))
}

export const deleteBoard = boardId => dispatch => {
    return BoardAPIUtil.deleteBoard(boardId)
        .then(() => {
            return dispatch(removeBoard(boardId));
        })
}