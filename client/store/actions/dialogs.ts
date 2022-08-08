import {DialogsActions, DialogsActionTypes} from "../../types/dialogs";
import {default as dialogsApi} from "../../utils/api/dialogs";

const setDialogs = (items: any[]): DialogsActions => ({
    type: DialogsActionTypes.SET_DIALOGS,
    payload: items
})

const setLoading = (loading: boolean): DialogsActions => ({
    type: DialogsActionTypes.SET_LOADING,
    payload: loading
})

export const setCurrentDialogId = (id: number): DialogsActions => ({
    type: DialogsActionTypes.SET_CURRENT_DIALOG_ID,
    payload: id
})

export const fetchDialogs = () => (dispatch: any) => {
    dispatch(setLoading(true));
    // @ts-ignore
    dialogsApi.getAll().then(({data}) => {
        dispatch(setDialogs(data));
    }).catch(() => {
        dispatch(setLoading(false));
    });
}

