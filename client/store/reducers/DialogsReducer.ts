import {DialogsActions, DialogsActionTypes, DialogsState} from "../../types/dialogs";

const initialState: DialogsState = {
    dialogs: [],
    currentDialogId: 1,
    loading: true
}


const dialogsReducer = (state = initialState, {type, payload}: DialogsActions): DialogsState => {
    switch (type) {
        case DialogsActionTypes.SET_DIALOGS:
            return {
                ...state,
                dialogs: payload,
                loading: false
            };
        case DialogsActionTypes.SET_CURRENT_DIALOG_ID:
            return {
                ...state,
                currentDialogId: payload
            };
        case DialogsActionTypes.SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        default:
            return state;
    }
}

export default dialogsReducer;