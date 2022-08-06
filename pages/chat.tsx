import React from 'react';
import styles from 'styles/chat.module.scss';
import Message from "../components/Message/Message";
import DialogItem from "../components/DialogItem/DialogItem";
import Dialogs from "../components/Dialogs/Dialogs";
import Head from "next/head";
import {FormOutlined, SearchOutlined, TeamOutlined} from "@ant-design/icons";

const Chat: React.FC = () => {
    return (
        <>
            <Head>
                <title>Chat</title>
                <meta name="description" content="My chat"/>
            </Head>
            <div className='card content-boxed mt-5'>
                <div className='chat' /*style={{display: 'flex'}}*/>
                    <div className="chat__sidebar">
                        <div className="chat__sidebar__header">
                            <div>
                                <TeamOutlined />
                                <span>Dialog list</span>
                            </div>
                            <FormOutlined />
                        </div>
                        <div className="chat__sidebar_search">
                            <div className="form-group form-group-feedback form-group-feedback-right">
                                <input type="text" className="form-control" placeholder="Right icon, input default"/>
                                    <div className="form-control-feedback">
                                        <SearchOutlined />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat__dialog"></div>
                    {/*<div className='p-3' style={{borderRight: '1px solid #e5e5e5'}}>*/}
                    {/*    <Dialogs*/}
                    {/*        dialogs={[*/}
                    {/*            {*/}
                    {/*                id: 1,*/}
                    {/*                user: {*/}
                    {/*                    id: 1,*/}
                    {/*                    username: 'Amanda Bellon',*/}
                    {/*                    avatar: 'https://i.pravatar.cc/150?img=37',*/}
                    {/*                    online: true*/}
                    {/*                },*/}
                    {/*                message: {*/}
                    {/*                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page\n' +*/}
                    {/*                        '                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal\n' +*/}
                    {/*                        '                        distribution of letters, as opposed to using \'Content here, content here\', making it look like\n' +*/}
                    {/*                        '                        readable English. Many desktop publishing packages and web page e',*/}
                    {/*                    read: false,*/}
                    {/*                    date: Date.now(),*/}
                    {/*                },*/}
                    {/*                unread: 3*/}
                    {/*            },*/}
                    {/*            {*/}
                    {/*                id: 2,*/}
                    {/*                user: {*/}
                    {/*                    id: 2,*/}
                    {/*                    username: 'YellowSnowman',*/}
                    {/*                    avatar: 'https://i.pravatar.cc/150/?img=52',*/}
                    {/*                    online: true*/}
                    {/*                },*/}
                    {/*                message: {*/}
                    {/*                    text: 'You need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',*/}
                    {/*                    read: true,*/}
                    {/*                    date: Date.now(),*/}
                    {/*                },*/}
                    {/*                unread: 0,*/}

                    {/*            },*/}
                    {/*            {*/}
                    {/*                id: 3,*/}
                    {/*                user: {*/}
                    {/*                    id: 3,*/}
                    {/*                    username: 'BenAfleckIsAnOkActor',*/}
                    {/*                    avatar: 'https://i.pravatar.cc/150?img=70',*/}
                    {/*                    online: false*/}
                    {/*                },*/}
                    {/*                message: {*/}
                    {/*                    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',*/}
                    {/*                    read: false,*/}
                    {/*                    date: 1659615729363,*/}
                    {/*                },*/}
                    {/*                unread: 0*/}
                    {/*            }*/}
                    {/*        ]}*/}
                    {/*        userID={2}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className='p-3' style={{display: 'flex', flexDirection: 'column', width: '100%'}}>*/}
                    {/*    <Message user={{}} text='Hello guys' date={1659615729363}/>*/}
                    {/*    <Message*/}
                    {/*        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"*/}
                    {/*        user={{}}*/}
                    {/*        date={1659615729363}*/}
                    {/*        attachments={[*/}
                    {/*            {*/}
                    {/*                id: 1,*/}
                    {/*                filename: "image.jpg",*/}
                    {/*                url: "https://source.unsplash.com/100x100/?random=1&nature,water"*/}
                    {/*            },*/}
                    {/*            {*/}
                    {/*                id: 2,*/}
                    {/*                filename: "image.jpg",*/}
                    {/*                url: "https://source.unsplash.com/100x100/?random=2&nature,water"*/}
                    {/*            },*/}
                    {/*            {*/}
                    {/*                id: 3,*/}
                    {/*                filename: "image.jpg",*/}
                    {/*                url: "https://source.unsplash.com/100x100/?random=3&nature,water"*/}
                    {/*            }*/}
                    {/*        ]}*/}
                    {/*    />*/}
                    {/*    <Message*/}
                    {/*        user={{}}*/}
                    {/*        text="Hello, World!"*/}
                    {/*        date={1659615729363}*/}
                    {/*        self={true}*/}
                    {/*        isRead={true}*/}
                    {/*    />*/}

                    {/*    <Message*/}
                    {/*        user={{}}*/}
                    {/*        date={1659680264624}*/}
                    {/*        attachments={[*/}
                    {/*            {*/}
                    {/*                id: 1,*/}
                    {/*                filename: "image.jpg",*/}
                    {/*                url: "https://source.unsplash.com/100x100/?random=1&nature,water"*/}
                    {/*            }*/}
                    {/*        ]}*/}
                    {/*    />*/}

                    {/*    <Message*/}
                    {/*        user={{}}*/}
                    {/*        text="Hello, World2!"*/}
                    {/*        date={Date.now()}*/}
                    {/*        self={true}*/}
                    {/*        isRead={true}*/}
                    {/*    />*/}
                    {/*    <Message*/}
                    {/*        user={{}}*/}
                    {/*        typing*/}
                    {/*    />*/}
                    {/*</div>*/}

                </div>
            </div>
        </>
    );
};

export default Chat;