import axios from "axios";

export const fetchUserBoards = userId => {
    const payload = {
        userId
    }
    return axios.post("/api/users/boards", payload);
}

export const fetchBoard = boardId => {
    return axios.get("/api/boards", { params : { boardId }})
}

export const addBoard = board => {
    return axios.post("api/boards", board);
}

export const deleteBoard = boardId => {
    const payload = {
        boardId : boardId
    }
    return axios.delete("api/boards", { data: payload })
}