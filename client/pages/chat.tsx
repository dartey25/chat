import React from 'react';
import Head from "next/head";
import {EllipsisOutlined} from "@ant-design/icons";

import Status from "../containers/Status";
import ChatInput from "../containers/ChatInput";
import Dialogs from "../containers/Dialogs";
import Messages from "../containers/Messages";

const Chat: React.FC = () => {
    return (
        <>
            <Head>
                <title>Chat</title>
                <meta name="description" content="My chat"/>
            </Head>
            <section className="card content-boxed chat-wrapper">
                <div className="chat">
                    <div className="chat__sidebar">
                        {/*<div className="chat__sidebar-header">*/}
                        {/*    <div>*/}
                        {/*        <TeamOutlined />*/}
                        {/*        <span>Список діалогів</span>*/}
                        {/*    </div>*/}
                        {/*    /!*<Button type="link" shape="circle" icon="form" />*!/*/}
                        {/*    <FormOutlined />*/}
                        {/*</div>*/}

                        <div className="chat__sidebar-dialogs">
                            <Dialogs userId={0}/>
                        </div>
                    </div>
                {/*    <div className="chat__dialog">*/}
                {/*        <div className="chat__dialog-header">*/}
                {/*            <div className="chat__dialog-header-partner">*/}
                {/*                <Status username={'MD Office Support'} online />*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <i className="icon-search4 text-primary mr-3 cursor-pointer" style={{fontSize: '1.1rem'}}></i>*/}
                {/*                <EllipsisOutlined />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="chat__dialog-messages">*/}
                {/*            <Messages />*/}
                {/*        </div>*/}
                {/*        <div className="chat__dialog-input">*/}
                {/*            <ChatInput />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                    <Messages/>
                </div>
            </section>
        </>
    );
};

export default Chat;