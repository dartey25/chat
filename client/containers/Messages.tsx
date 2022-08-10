import React, {useState, useEffect, useRef} from "react";

import {default as BaseMessages} from "../components/Messages/Messages";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchMessages} from "../store/actions/messages";
import Status from "./Status";
import {EllipsisOutlined} from "@ant-design/icons";
import ChatInput from "./ChatInput";
import {Empty} from "antd";


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
        if (messagesRef) {
            // @ts-ignore
            messagesRef.current.scrollTo(0, 9999);
        }
    }, [messages]);

    // return (<BaseMessages
    //         messages={messages}
    //         loading={loading}
    //         blockRef={messagesRef}
    //     />
    return (<div className="chat__dialog">
            {
                currentDialogId ?
                    <>
                        <div className="chat__dialog-header">
                            <div className="chat__dialog-header-partner">
                                <Status/>
                            </div>
                            <div>
                                <i className="icon-search4 text-primary mr-3 cursor-pointer"
                                   style={{fontSize: '1.1rem'}}></i>
                                <EllipsisOutlined/>
                            </div>
                        </div>
                        <div className="chat__dialog-messages">
                            <BaseMessages
                                messages={messages}
                                loading={loading}
                                blockRef={messagesRef}
                            />
                        </div>
                        <div className="chat__dialog-input">
                            <ChatInput/>
                        </div>
                    </>
                    :
                    <Empty description="Виберіть діалог"/>}
        </div>
    );
};

export default Messages;