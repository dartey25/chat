import React, {ReactElement} from 'react';
import styles from './DialogItem.module.scss'
import Time from "../Time/Time";
import IconRead from "../IconRead/IconRead";
import Avatar from "../Avatar/Avatar";
import {useTypedSelector} from "../../hooks/useTypedSelector";


interface DialogItemProps {
    id: number;
    user: any;
    message: any;
    unread: number;
    self: boolean;
    onSelect: (id: number) => void;
}



const DialogItem: React.FC<DialogItemProps> = ({id, user, message, unread, self, onSelect}) => {
    const {currentDialogId} = useTypedSelector(state => state.dialogs)
    return (
        <div onClick={onSelect.bind(this, id)} className={id === currentDialogId ? [styles.dialogs__item, styles.dialogs__item_active].join(' ') : styles.dialogs__item}>
            <Avatar avatar={user.avatar} online={user.online}/>
            <div className={styles.dialogs__item_info}>
                <div className={styles.dialogs__item_info_top}>
                    <span className={styles.dialogs__item_info_top__username}>
                        {user.username}
                    </span>
                    <span className={styles.dialogs__item_info_top__date}>
                        <Time date={message.date} short/>
                    </span>
                </div>
                <div className={styles.dialogs__item_info_bottom}>
                    <p>
                        {message.text}
                    </p>
                    {self && <IconRead self={true} isRead={message.read} stylesRead={styles.dialogs__item_read} stylesDelivered={styles.dialogs__item_delivered}/>}
                    {unread > 0 && !self && <span className={[styles.dialogs__item_unread, 'badge badge-pill'].join(' ')}>
                        {unread > 9 ? '9+' : unread}
                    </span>}
                </div>
            </div>
        </div>
    );
};

export default DialogItem;