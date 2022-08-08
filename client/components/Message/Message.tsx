import React from 'react';

import styles from 'Message.module.scss';
import Time from "../Time/Time";
import IconRead from "../IconRead/IconRead";


interface MessageProps {
    id?: string,
    user: any;
    text?: string;
    date?: number;
    attachments?: any[];
    self?: boolean;
    isRead?: boolean;
    typing?: boolean;
}


const Message: React.FC<MessageProps> = ({text, date, self, attachments, user, isRead, typing}) => {
    let mainClassNames = [styles.message]
    self && mainClassNames.push(styles.message__self);
    typing && mainClassNames.push(styles.message__typing);
    attachments?.length === 1 && mainClassNames.push(styles.message__image);


    return (
        <div className={mainClassNames.join(' ')}>
            <div className={styles.message__content}>
                <IconRead self={self} isRead={isRead} stylesRead={styles.message__read}
                          stylesDelivered={[styles.message__read, styles.message__readNo].join(' ')}/>
                {/*<div className={styles.message__avatar}>*/}
                {/*    <img src={avatar} alt={`Avatar ${user.username}`}/>*/}
                {/*</div>*/}
                <div className={styles.message__info}>
                    <div className={styles.message__attachments}>
                        {attachments &&
                            attachments.map((item, index) => {
                                    if (index < 2) {
                                        return (
                                            <div key={item.id} className={styles.message__attachments_item}>
                                                <img src={item.url} alt={item.filename}/>
                                            </div>
                                        )
                                    }
                                    if (index === 2) {
                                        return (
                                            <div key={item.id} className={styles.message__attachments_multiple}>
                                                <span>+{attachments.length - index}</span>
                                            </div>
                                        )
                                    }
                                    return (<></>);
                                }
                            )}
                    </div>
                    {(text || typing) && <div className={styles.message__bubble}>
                        {text && <p className={styles.message__text}>{text}</p>}
                        {typing && (
                            <div className={styles.message__typing}>
                                <span/>
                                <span/>
                                <span/>
                            </div>
                        )}
                    </div>}

                    {date && <span className={styles.message__date}>
                        <Time date={date}/>
                    </span>}
                </div>
            </div>
        </div>
    );

}

export default Message;

