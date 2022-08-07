export interface DialogsState {
    items: any[];
}

export enum DialogsActionTypes {
    SET_DIALOGS = "SET_DIALOGS",
    SET_CURRENT_DIALOG_ID = "SET_CURRENT_DIALOG_ID"
}

export interface SetDialogsAction {
    type: DialogsActionTypes.SET_DIALOGS;
    payload: any[];
}

export interface SetCurrentDialogIdAction {
    type: DialogsActionTypes.SET_CURRENT_DIALOG_ID;
    payload: number;
}

export type DialogsActions = SetDialogsAction | SetCurrentDialogIdAction;