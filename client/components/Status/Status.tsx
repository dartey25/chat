import React from "react";

import styles from "./Status.module.scss";
import Avatar from "../Avatar/Avatar";

interface StatusProps {
    username: string;
    avatar?: string;
    online?: boolean;
}

const Status: React.FC<StatusProps> = ({online, username, avatar}) => (
    <>
        <Avatar avatar={avatar} online={online}/>
        <div>
            <h6 className="chat__dialog-header-username">{username}</h6>
            <div className="chat__dialog-header-status">
            <span className={online ? [styles.status, styles.status_online].join(' ') : styles.status}>
                {online ? "онлайн" : "оффлайн"}
            </span>
            </div>
        </div>
    </>
);


export default Status;