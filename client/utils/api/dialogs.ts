import {axios} from "../../core";
import {useActions} from "../../hooks/useActions";
import {setDialogs} from "../../store/actions/dialogs";

export default {
    getAll: () => axios.get("/dialogs"),
    fetchDialogs: () => {
        axios.get("/dialogs").then(({data}) => {
            const {setDialogs} = useActions();
            setDialogs(data);
        })
    }

};