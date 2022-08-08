import React from 'react';
import Head from "next/head";
import {FormOutlined, SearchOutlined, TeamOutlined, EllipsisOutlined} from "@ant-design/icons";
import Status from "../components/Status/Status";
import ChatInput from "../components/ChatInput/ChatInput";
import Dialogs from "../containers/Dialogs";
import Messages from "../containers/Messages";
import Avatar from "../components/Avatar/Avatar";

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
                        <div className="chat__sidebar-header">
                            <div>
                                <TeamOutlined />
                                <span>Список діалогів</span>
                            </div>
                            {/*<Button type="link" shape="circle" icon="form" />*/}
                            <FormOutlined />
                        </div>

                        <div className="chat__sidebar-dialogs">
                            <Dialogs userId={0}/>
                        </div>
                    </div>
                    <div className="chat__dialog">
                        <div className="chat__dialog-header">
                            <div className="chat__dialog-header-partner">
                                <Avatar avatar={'https://i.pravatar.cc/150?img=37'} online/>
                                <div /*className="chat__dialog-header-info"*/>
                                    <h6 className="chat__dialog-header-username">Amanda Bellon</h6>
                                    <div className="chat__dialog-header-status">
                                        <Status online />
                                    </div>
                                </div>
                            </div>
                            <EllipsisOutlined />
                            {/*<Button type="link" shape="circle" icon="ellipsis" />*/}
                        </div>
                        <div className="chat__dialog-messages">
                            <Messages />
                        </div>
                        <div className="chat__dialog-input">
                            <ChatInput />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Chat;