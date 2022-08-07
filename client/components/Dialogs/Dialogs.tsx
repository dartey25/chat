import React from 'react';
import DialogItem from "../DialogItem/DialogItem";
import {useTypedSelector} from "../../hooks/useTypedSelector";


interface DialogsProps {
    dialogs: any[];
    userID: number;
    onSearch: (value: string) => void;
    inputValue: string;
    currentDialogId: number;
    onSelectDialog?: (id: number) => void;
}
const Dialogs:React.FC<DialogsProps> = ({
                                            dialogs,
                                            userID,
                                            onSearch,
                                            inputValue,
                                            currentDialogId,
                                            onSelectDialog
}) => {
    return (
        <div className='dialogs'>
            <div className="dialogs__search">
                <div className="form-group form-group-feedback form-group-feedback-right">
                    <input type="text" className="form-control form-control-lg" placeholder="Right icon, input large"/>
                        <div className="form-control-feedback form-control-feedback-lg">
                            <i className="icon-make-group"></i>
                        </div>
                </div>
            </div>
            {dialogs.map(dialog => {
                return <DialogItem
                    key={dialog.id}
                    user={dialog.user}
                    message={dialog.message}
                    unread={dialog.unread}
                    self={dialog.user.id === userID}
                />
            })}
        </div>
    );
};

export default Dialogs;