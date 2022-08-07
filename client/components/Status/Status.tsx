import React from "react";

import styles from "./Status.module.scss";

interface StatusProps {
    online?: boolean;
}

const Status: React.FC<StatusProps> = ({ online }) => (
    <span className={online? [styles.status, styles.status_online].join(' ') : styles.status}>
    {online ? "онлайн" : "оффлайн"}
  </span>
);


export default Status;