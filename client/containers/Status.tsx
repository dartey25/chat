import React from 'react';

import {default as BaseStatus} from '../components/Status/Status';
import {useTypedSelector} from "../hooks/useTypedSelector";

const Status = () => {
    const {currentDialogId, dialogs} = useTypedSelector(state => state.dialogs);
    const {id} = useTypedSelector(state => state.user);


    const currentDialogObj = dialogs.filter(
        dialog => dialog.id === currentDialogId
    )[0];

    let partner = {};

    if (currentDialogObj) {
        if (currentDialogObj.author.id === id) {
            partner = currentDialogObj.partner;
        } else {
            partner = currentDialogObj.author;
        }
    }

    return (
        <BaseStatus username={partner.username} avatar={partner.avatar} online={partner.online}/>
    );
};

export default Status;