import { RECEIVE_CURRENT_USER, RECEIVE_LOGOUT} from "../../actions/session_actions";

const initialState = {
    isLoggedIn: false,
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                isLoggedIn: !!action.currentUser,
                user : action.currentUser
            };
        case RECEIVE_LOGOUT:
            return initialState;

        default:
            return state;
    }
}