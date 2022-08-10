import {UserActions, UserActionTypes, UserState} from "../../types/user";


const initialState: UserState = {
    id: 0
}


const userReducer = (state = initialState, {type, payload}: UserActions): UserState => {
    switch (type) {
        case UserActionTypes.SET_USER:
            return {
                ...state,
                id: payload,
            }
        default:
            return state;
    }
}

export default userReducer;