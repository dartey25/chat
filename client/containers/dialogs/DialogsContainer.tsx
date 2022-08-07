import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import dialogsApi from "../../utils/api/dialogs";

import Dialogs from "../../components/Dialogs/Dialogs";
import {useActions} from "../../hooks/useActions";


const DialogsContainer = ({
                              fetchDialogs,
                              currentDialogId,
                              setCurrentDialogId,
                              items,
                              userId
                          }) => {
    const {setDialogs} = useActions()
    //const [inputValue, setValue] = useState("");
    //const [filteredItems, setFilteredItems] = useState(Array.from(items));

    // const onChangeInput = value => {
    //     setFilteredItems(
    //         items.filter(
    //             dialog =>
    //                 dialog.user.username.toLowerCase().indexOf(value.toLowerCase()) >= 0
    //         )
    //     );
    //     setValue(value);
    // };
    const fetchDialogs = () => {
        dialogsApi.getAll().then(({data}) => {
            setDialogs(data)
        })
    }

    useEffect(() => {
        // if (!items.length) {
        //     fetchDialogs();
        // } else {
        //     setFilteredItems(items);
        // }

        if (!items.length) {
            fetchDialogs();
        }
    }, [items]);

    return (
        <Dialogs
            user={{}}
            items={filtred}
            onSearch={onChangeInput}
            inputValue={inputValue}
            onSelectDialog={setCurrentDialogId}
            currentDialogId={currentDialogId}
        />
    );
};

// export default connect(
//     ({ dialogs }) => dialogs,
//     dialogsActions
// )(Dialogs);

export default DialogsContainer;