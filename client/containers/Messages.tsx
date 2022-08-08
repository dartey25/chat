import React, {useState, useEffect, useRef} from "react";

import {default as BaseMessages} from "../components/Messages/Messages";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchMessages} from "../store/actions/messages";


// interface MessagesContainerProps {
//
// }

const Messages: React.FC = () => {
    const {fetchMessages} = useActions();
    const {messages, loading} = useTypedSelector(state => state.messages);
    const {currentDialogId} = useTypedSelector(state => state.dialogs);
    const messagesRef = useRef(null);

    useEffect(() => {
        currentDialogId && fetchMessages(currentDialogId);
    }, [currentDialogId])

    useEffect(() => {
       if (messagesRef){
           // @ts-ignore
           //setTimeout(() => messagesRef.current.scrollIntoView({behavior: 'smooth'}), 0);
           messagesRef.current.scrollTo(0, 9999);
           // scrollTo({
           //     y: messagesRef.current.offsetTop,
           //     smooth: true
           // })
       }
    }, [messages]);

    return (<BaseMessages
            messages={messages}
            loading={loading}
            blockRef={messagesRef}
        />
    );
};

export default Messages;