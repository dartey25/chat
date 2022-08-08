import React, {useState, useEffect} from "react";

import {default as BaseDialogs} from "../components/Dialogs/Dialogs";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";


interface DialogsContainerProps {
    userId: number;
}

const Dialogs: React.FC<DialogsContainerProps> = ({ userId}) => {
    const {fetchDialogs, setCurrentDialogId} = useActions();
    const {dialogs, loading} = useTypedSelector(state => state.dialogs);
    const [inputValue, setValue] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<any[]>(Array.from(dialogs));

    const onChangeInput = (value: any) => {
        if (value) {
            setFilteredItems(
                dialogs.filter(
                    dialog =>
                        dialog.user.username.toLowerCase().indexOf(value.toLowerCase()) >= 0
                )
            );
        } else {
            setFilteredItems(Array.from(dialogs));
        }
        setValue(value);
    };

    useEffect(() => {
        if (!dialogs.length) {
            fetchDialogs();
        } else {
            setFilteredItems(dialogs);
        }
    }, [dialogs]);

    return (<BaseDialogs
                userID={userId}
                dialogs={filteredItems}
                onSearch={onChangeInput}
                inputValue={inputValue}
                onSelectDialog={setCurrentDialogId}
                loading={loading}
            />
    );
};

export default Dialogs;