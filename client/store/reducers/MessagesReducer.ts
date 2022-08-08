import {MessagesActions, MessagesActionTypes, MessagesState} from "../../types/messages";


const initialState: MessagesState = {
    messages: [],
    loading: false
}


const messagesReducer = (state = initialState, {type, payload}: MessagesActions): MessagesState => {
    switch (type) {
        case MessagesActionTypes.SET_MESSAGES:
            return {
                ...state,
                messages: payload,
                loading: false
            }
        case MessagesActionTypes.SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        default:
            return state;
    }
}

export default messagesReducer;