import React, { useState } from "react";
import { Button, Input } from "antd";
// @ts-ignore
import { UploadField } from "@navjobs/upload";

import styles from "./ChatInput.module.scss";
import {SendOutlined, LinkOutlined} from "@ant-design/icons";

const ChatInput: React.FC = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.log(message);
        setMessage('');
    }

    return (
        <div className={styles.chat_input}>
            <div className={styles.chat_input__upload_btn}>
                <UploadField
                    onFiles={(files: any) => console.log(files)}
                    containerProps={{
                        className: "chat-input__actions-upload-btn"
                    }}
                    uploadProps={{
                        accept: "*",
                        multiple: "multiple"
                    }}
                >
                    <Button shape="circle" icon={<LinkOutlined />} />
                </UploadField>
            </div>
            <Input
                onChange={e => setMessage(e.target.value)}
                size="large"
                placeholder="Введите текст сообщения…"
            />
            <div className={styles.chat_input__actions}>
                <Button type="primary" onClick={sendMessage} shape="circle" icon={<SendOutlined />} size="large" />
            </div>
        </div>
    );
};


export default ChatInput;