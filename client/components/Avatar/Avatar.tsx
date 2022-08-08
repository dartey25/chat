import React, {ReactElement} from 'react';
import styles from "./Avatar.module.scss";

interface AvatarProps{
    avatar: string;
    online?: boolean;
}

const getAvatar = (avatar: string): ReactElement => {
    if (avatar) {
        return (<img src={`${avatar}`} alt="avatar" draggable="false"/>);
    } else {
        //make avatar from first letter of name
        return (<img src="https://i.pravatar.cc/300" alt="avatar" draggable="false"/>);
    }
}

const Avatar:React.FC<AvatarProps> = ({avatar,online}) => {
    return (
        <div className={online ? [styles.avatar, styles.online].join(' ') : styles.avatar}>
            {getAvatar(avatar)}
        </div>
    );
};

export default Avatar;