import { axios } from "../../core";

export default {
    getAllByDialogId: (id: number) => axios.get("/messages?dialog=" + id)
};