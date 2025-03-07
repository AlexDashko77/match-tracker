import axios from "axios";
import { flow, makeAutoObservable } from "mobx";

class Store {
    matches:any[] = []
    error: string | null = null

    constructor() {
        makeAutoObservable(this, {
            getMatches: flow
        })
    }

    getMatches = flow(function* (this: Store) {
        this.error = null
        try {
            const res = yield axios.get("https://app.ftoyd.com/fronttemp-service/fronttemp")
            const data = res.data.data.matches
            this.matches = data
            console.log(data);
            
        } catch (err) {
            console.log(err);
            this.error = "error"            
        }
    })

}

export default new Store()