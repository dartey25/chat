import {combineReducers} from "redux";
import {HYDRATE} from 'next-redux-wrapper';
import dialogsReducer from "./DialogsReducer";
import messagesReducer from "./MessagesReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    messages: messagesReducer,
    user: userReducer
})

export  const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state.count) nextState.count = state.count; // preserve count value on client side navigation
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};

export type RootState = ReturnType<typeof rootReducer>;

