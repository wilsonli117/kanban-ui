import axios from "axios";

export const fetchUserBoards = userId => {
    const obj = {
        userId
    }
    return axios.post("/api/users/boards", obj);
}

export const fetchBoard = boardId => {
    return axios.get("/api/boards", { boardId })
}

export const addBoard = board => {
    return axios.post("api/boards", board);
}

export const deleteBoard = boardId => {
    return axios.delete("api/boards", { boardId })
}