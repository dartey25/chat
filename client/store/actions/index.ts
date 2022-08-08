import * as dialogsActionCreators from "./dialogs";
import * as messagesActionCreators from "./messages";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...dialogsActionCreators,
    ...messagesActionCreators
}