export interface UserState {
    id: number;
}

export enum UserActionTypes {
    SET_USER = "SET_USER"
}

interface SetUserAction {
    type: typeof UserActionTypes.SET_USER;
    payload: number;
}




export type UserActions = SetUserAction;