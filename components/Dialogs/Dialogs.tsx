import React from 'react';
import styles from 'Dialogs.module.scss';
import DialogItem from "../DialogItem/DialogItem";


interface DialogsProps {
    dialogs: any[];
    userID: number;
}
const Dialogs:React.FC<DialogsProps> = ({dialogs, userID}) => {
    return (
        <div className={styles.dialogs}>
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