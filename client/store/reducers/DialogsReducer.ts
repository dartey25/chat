import {DialogsActions, DialogsActionTypes, DialogsState} from "../../types/dialogs";

const initialState: DialogsState = {
    items: [],
}


const dialogsReducer = (state = initialState, {type, payload}: DialogsActions): DialogsState => {
    switch (type) {
        case DialogsActionTypes.SET_DIALOGS:
            return {
                ...state,
                items: payload
            };
        case DialogsActionTypes.SET_CURRENT_DIALOG_ID:
            return {
                ...state,
                currentDialogId: payload
            };
        default:
            return state;
    }
}

export default dialogsReducer;