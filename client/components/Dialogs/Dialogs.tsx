import React, {useState} from 'react';

import DialogItem from "../DialogItem/DialogItem";
import {Empty} from "antd";
import Loader from "../Loader/Loader";


interface DialogsProps {
    dialogs: any[];
    userID: number;
    onSearch: (value: string) => void;
    inputValue: string;
    onSelectDialog: (id: number) => void;
    loading: boolean;
}

const Dialogs: React.FC<DialogsProps> = ({
                                             dialogs,
                                             userID,
                                             onSearch,
                                             inputValue,
                                             onSelectDialog,
                                             loading
                                         }) => {
    return (
        <div className='dialogs'>
            <div className="dialogs__search">
                <div className="form-group form-group-feedback form-group-feedback-right">
                    <input type="text" className="form-control form-control-lg" placeholder="Пошук по діалогам"
                           onChange={e => onSearch(e.target.value)}
                           value={inputValue}/>
                    <div className="form-control-feedback form-control-feedback-lg">
                        <i className="icon-make-group"></i>
                    </div>
                </div>
            </div>
            {loading ?
                <Loader/>
                :
                (dialogs.length ? (dialogs.map((dialog, index) => {
                        return <DialogItem
                            key={index}
                            id={dialog.id}
                            user={dialog.user}
                            message={dialog.message}
                            unread={dialog.unread}
                            self={/*dialog.message.senderID === userID*/ Math.floor(Math.random() * (1 - 0 + 1)) === 1}
                            onSelect={onSelectDialog}
                        />
                    }))
                    :
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="Ничего не найдено"
                    />)
            }
        </div>
    );
};

export default Dialogs;