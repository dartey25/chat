export interface MessagesState {
    messages: any[];
    loading: boolean;
}

export enum MessagesActionTypes {
    SET_MESSAGES = "SET_MESSAGES",
    SET_LOADING = "MESSAGES:SET_LOADING"
}

interface SetMessagesAction {
    type: typeof MessagesActionTypes.SET_MESSAGES;
    payload: any[];
}

interface SetLoadingAction {
    type: typeof MessagesActionTypes.SET_LOADING;
    payload: boolean;
}



export type MessagesActions = SetMessagesAction | SetLoadingAction;