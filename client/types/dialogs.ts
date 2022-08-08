export interface DialogsState {
    dialogs: any[];
    currentDialogId: number | null;
    loading: boolean;
}

export enum DialogsActionTypes {
    SET_DIALOGS = "SET_DIALOGS",
    SET_CURRENT_DIALOG_ID = "SET_CURRENT_DIALOG_ID",
    SET_LOADING = "DIALOGS:SET_LOADING"
}

export interface SetDialogsAction {
    type: DialogsActionTypes.SET_DIALOGS;
    payload: any[];
}

export interface SetCurrentDialogIdAction {
    type: DialogsActionTypes.SET_CURRENT_DIALOG_ID;
    payload: number;
}

export interface SetLoadingAction {
    type: DialogsActionTypes.SET_LOADING;
    payload: boolean;
}

export type DialogsActions = SetDialogsAction | SetCurrentDialogIdAction | SetLoadingAction;