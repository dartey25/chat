import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import Message from "../Message/Message";


interface MessagesProps {
    messages?: any[];
}
const Messages: React.FC<MessagesProps> = ({ messages }) => {
    return messages ? (
        <div>
            <Message user={{}} text='Hello guys' date={1659615729363}/>
            <Message
                text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
                user={{}}
                date={1659615729363}
                attachments={[
                    {
                        id: 1,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                    },
                    {
                        id: 2,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=2&nature,water"
                    },
                    {
                        id: 3,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=3&nature,water"
                    }
                ]}
            />
            <Message
                user={{}}
                text="Hello, World!"
                date={1659615729363}
                self={true}
                isRead={true}
            />

            <Message
                user={{}}
                date={1659680264624}
                attachments={[
                    {
                        id: 1,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                    }
                ]}
            />

            <Message
                user={{}}
                text="Hello, World2!"
                date={Date.now()}
                self={true}
                isRead={true}
            />
            <Message
                user={{}}
                typing
            />
            <Message user={{}} text='Hello guys' date={1659615729363}/>
            <Message
                text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
                user={{}}
                date={1659615729363}
                attachments={[
                    {
                        id: 1,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                    },
                    {
                        id: 2,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=2&nature,water"
                    },
                    {
                        id: 3,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=3&nature,water"
                    }
                ]}
            />
            <Message
                user={{}}
                text="Hello, World!"
                date={1659615729363}
                self={true}
                isRead={true}
            />

            <Message
                user={{}}
                date={1659680264624}
                attachments={[
                    {
                        id: 1,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                    }
                ]}
            />

            <Message
                user={{}}
                text="Hello, World2!"
                date={Date.now()}
                self={true}
                isRead={true}
            />
            <Message
                user={{}}
                typing
            />
            <Message user={{}} text='Hello guys' date={1659615729363}/>
            <Message
                text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
                user={{}}
                date={1659615729363}
                attachments={[
                    {
                        id: 1,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                    },
                    {
                        id: 2,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=2&nature,water"
                    },
                    {
                        id: 3,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=3&nature,water"
                    }
                ]}
            />
            <Message
                user={{}}
                text="Hello, World!"
                date={1659615729363}
                self={true}
                isRead={true}
            />

            <Message
                user={{}}
                date={1659680264624}
                attachments={[
                    {
                        id: 1,
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                    }
                ]}
            />

            <Message
                user={{}}
                text="Hello, World2!"
                date={Date.now()}
                self={true}
                isRead={true}
            />
            <Message
                user={{}}
                typing
            />
        </div>
    ) : (
        <Empty description="Повідомлень ще немає..." />
    );
};

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;