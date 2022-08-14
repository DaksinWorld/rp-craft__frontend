import { makeAutoObservable } from "mobx";

class MessageStore {
    private message: {
        value: string,
        type: 'danger' | 'warning' | 'primary' | ''
    };
    constructor() {
        this.message = {value: '', type: ''};
        makeAutoObservable(this);
    }

    setMessage = (message: { value: string; type: "" | "danger" | "warning" | "primary"; }) => (this.message = message);

    get messageData() {
        return this.message
    }

    hydrate = (data: { message: any; }) => {
        if (!data) return;
        this.setMessage(data.message);
    };

}

export default MessageStore
