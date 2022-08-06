import React from "react";
import styles from "../Message/Message.module.scss";

interface IconReadProps {
    self?: boolean,
    isRead?: boolean
    stylesRead: string,
    stylesDelivered: string
}

const IconRead: React.FC<IconReadProps> = ({ self, isRead , stylesRead, stylesDelivered}) =>
    (self && (
        isRead ? (
            <img
                className={stylesRead}
                src='/img/read.svg'
                alt="Readed icon"
            />
        ) : (
            <img
                className={stylesDelivered}
                src='/img/delivered.svg'
                alt="No readed icon"
            />
        ))) ||
    null;

export default IconRead;