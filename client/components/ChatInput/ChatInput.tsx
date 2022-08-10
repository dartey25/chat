import React, {useEffect, useRef, useState} from "react";
import {SmileOutlined} from "@ant-design/icons";
// @ts-ignore
import { UploadField } from "@navjobs/upload";
// @ts-ignore
import Picker from '@emoji-mart/react'

import styles from "./ChatInput.module.scss";


interface ChatInputProps {
    blockRef: React.RefObject<HTMLElement | undefined>;
    message: string;
    setMessage: (message: string) => void;
    sendMessage: () => void;
    toggleEmojiPicker: () => void;
    emojiPickerVisible: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({blockRef, toggleEmojiPicker, emojiPickerVisible, message, setMessage, sendMessage}) => {
    return (
        <div className={styles.chat_input}>
            <div className={styles.chat_input__emoji}>
                {emojiPickerVisible && (
                    <div className={styles.chat_input__emoji_picker}>
                        <Picker set="apple" onEmojiSelect={console.log} locale='uk' previewPosition='none'/>
                    </div>
                )}
                {// @ts-ignore
                <SmileOutlined ref={blockRef} className='test' onClick={toggleEmojiPicker}/>
                }
            </div>
            <input
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Повідомлення"
                type="text"
                className="form-control chat__input"
            />
            <div className={styles.chat_input__actions}>
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
                    <button type="button" className="btn btn-light btn-icon rounded-pill cursor-pointer">
                        <i className="icon-link"></i>
                    </button>
                </UploadField>
                <button type="button" onClick={sendMessage} className="btn btn-primary btn-icon rounded-pill cursor-pointer">
                    <i className="icon-paperplane" style={{right: 1}}></i>
                </button>
            </div>
        </div>
    );
};


export default ChatInput;