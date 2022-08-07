import React, { useState } from "react";
import { Button, Input } from "antd";

import styles from "./ChatInput.module.scss";
import {SendOutlined, LinkOutlined} from "@ant-design/icons";

const ChatInput: React.FC = () => {
    const [value, setValue] = useState("");

    return (
        <div className={styles.chat_input}>
            <div className={styles.chat_input__smile_btn}>
                <Button shape="circle" icon={<LinkOutlined />} />
            </div>
            <Input
                onChange={e => setValue(e.target.value)}
                size="large"
                placeholder="Введите текст сообщения…"
            />
            <div className={styles.chat_input__actions}>
                {/*<Button type="link" shape="circle" icon="camera" />*/}
                {/*{value ? (*/}
                {/*    <Button type="link" shape="circle" icon="check-circle" />*/}
                {/*) : (*/}
                {/*    <Button type="link" shape="circle" icon="audio" />*/}
                {/*)}*/}
                <Button type="primary" shape="circle" icon={<SendOutlined />} size="large" />
            </div>
        </div>
    );
};


export default ChatInput;