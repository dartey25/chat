import React from "react";
import {Empty} from "antd";

import styles from "./Messages.module.scss";
import Message from "../Message/Message";
import Loader from "../Loader/Loader";


interface MessagesProps {
    messages: any[];
    loading: boolean;
    blockRef: React.RefObject<HTMLDivElement>;
}

const Messages: React.FC<MessagesProps> = ({messages, loading, blockRef}) => {
    // return (<div ref={blockRef} className={loading ? [styles.messages, styles.messages_loading].join(' ') : styles.messages }>
    //     {loading ? <Loader/>
    //     :
    //     (messages.length > 0 ? messages.map(message =>
    //                 <Message key={message.id} {...message}/>
    //             ) :
    //             <Empty description="Повідомлень ще немає..."/>
    //     )}
    // </div>);
    return( <div
        ref={blockRef}
        className={loading ? [styles.messages, styles.messages_loading].join(' ') : styles.messages }
    >
        {loading ? (
            <Loader/>
        ) : messages && !loading ? (
            messages.length > 0 ? (
                messages.map(message => <Message key={message.id} {...message} />)
            ) : (
                <Empty description="Повідомлень ще немає.." />
            )
        ) : (
            <Empty description="Оберіть діалог" />
        )}
    </div>);
};

export default Messages;