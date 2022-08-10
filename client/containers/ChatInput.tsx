import React, {useEffect, useRef, useState} from 'react';

import {default as BaseChatInput} from '../components/ChatInput/ChatInput';

const ChatInput:React.FC = () => {
    const [message, setMessage] = useState('');
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
    const pickerRef = useRef<HTMLElement>()

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    };

    const handleOutsideClick = (el: any, e: any) => {
        if (el && !el.contains(e.target)) {
            setShowEmojiPicker(false);
        }
    };


    const sendMessage = () => {
        console.log(message);
        setMessage('');
    }

    useEffect(() => {
        const el = pickerRef.current;
        document.addEventListener('click', handleOutsideClick.bind(this, el));
        return () => {
            document.removeEventListener('click', handleOutsideClick.bind(this, el));
        };
    }, []);
    return (
        <BaseChatInput
            blockRef={pickerRef}
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            toggleEmojiPicker={toggleEmojiPicker}
            emojiPickerVisible={emojiPickerVisible}
        />
    );
};

export default ChatInput;