import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { login, signup, logout } from "../actions/session_actions";

const SessionForm = (props) => {
    const dispatch = useDispatch();
    const currentUser = props.currentUser;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formType, setFormType] = useState("login");

    const handleChange = (field, e) => {
        if (field === "username") {
            setUsername(e.currentTarget.value);
        } else {
            setPassword(e.currentTarget.value);
        }
    }

    const switchForm = () => {
        if (formType === "login") {
            setFormType("signup");
        } else {
            setFormType("login");
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (formType === "login") {
            dispatch(login({ username, password }))
        } else {
            dispatch(signup({ username, password }))
        }
    }

    const handleLogout = () => {
        dispatch(logout());
    }

    if (currentUser) {
        return (
            <>
                <div>{`Hello ${currentUser}!`}</div>
                <button onClick={handleLogout}>Logout</button>
            </>
        )
    }

    if (formType === "login") {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username
                        <input id="username" value={username} onChange={(e) => handleChange("username", e)}></input>
                    </label>
                    <label htmlFor="password">Password
                        <input id="password" value={password} type="password" onChange={(e) => handleChange("password", e)}></input>
                    </label>
                    <button>Login</button>
                </form>
                <button onClick={switchForm}>Sign Up Instead</button>
            </>
        )
    } else {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username
                        <input id="username" value={username} onChange={(e) => handleChange("username", e)}></input>
                    </label>
                    <label htmlFor="password">Password
                        <input id="password" value={password} type="password" onChange={(e) => handleChange("password", e)}></input>
                    </label>
                    <button>Sign up</button>
                </form>
                <button onClick={switchForm}>Log In Instead</button>
            </>
        )
    }
    
}

export default SessionForm;