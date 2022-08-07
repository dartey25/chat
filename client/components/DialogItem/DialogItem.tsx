import React, {ReactElement} from 'react';
import styles from './DialogItem.module.scss'
import Time from "../Time/Time";
import IconRead from "../IconRead/IconRead";


interface DialogItemProps {
    user: Object;
    message: Object;
    unread?: number;
    self: boolean;
}

const getAvatar = (avatar: string): ReactElement => {
    if (avatar) {
        return (<img src={`${avatar}`} alt="avatar"/>);
    } else {
        //make avatar from first letter of name
        return (<img src="https://i.pravatar.cc/300" alt="avatar"/>);
    }
}

const DialogItem: React.FC<DialogItemProps> = ({user, message, unread, self}) => {
    return (
        <div
            className={user.online ? [styles.dialogs__item, styles.dialogs__item_online].join(' ') : styles.dialogs__item}>
            <div className={styles.dialogs__item_avatar}>
                {getAvatar(user.avatar)}
            </div>
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