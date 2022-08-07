import {DialogsActions, DialogsActionTypes} from "../../types/dialogs";

export const setDialogs= (items: any[]): DialogsActions => ({
    type: DialogsActionTypes.SET_DIALOGS,
    payload: items
})

export const setCurrentDialogId= (id: number): DialogsActions => ({
    type: DialogsActionTypes.SET_CURRENT_DIALOG_ID,
    payload: id
})

// fetchDialogs: () => dispatch => {
//     dialogsApi.getAll().then(({ data }) => {
//         dispatch(actions.setDialogs(data));
//     });
// }
