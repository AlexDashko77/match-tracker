import axios from "axios";
import { computed, flow, makeAutoObservable } from "mobx";
import webSocketService from "../services/webSocketService";
import { IGame } from "../types/game";

class Store {
    allMatches:IGame[] = []
    error: string | null = "Ошибка: не удалось загрузить информацию"
    isError: boolean = false
    isLoading: boolean = false
    sortValue: string = "Все статусы"

    constructor() {
        makeAutoObservable(this, {
            sortedMatches: computed,
            getMatches: flow
        })
        webSocketService.connect("wss://app.ftoyd.com/fronttemp-service/ws", this.changeAllMatches);
    }

    getMatches = flow(function* (this: Store) {
        this.isError = false
        this.isLoading = true
        try {
            const res = yield axios.get("https://app.ftoyd.com/fronttemp-service/fronttemp")
            const data = res.data.data.matches
            this.allMatches = data            
            
        } catch(err) {
            console.error(err)
            this.isError = true
        } finally {
            this.isLoading = false
        }
    })

    changeAllMatches = (data: IGame[]) => {
        this.allMatches = data
    }

    changeSortValue = (value: string) => {        
        this.sortValue = value
    }
    get sortedMatches() {
        if (this.sortValue === "Все статусы") return this.allMatches;
        return this.allMatches.filter(el => el.status === this.sortValue);
    }

    disconnectWebSocket = () => {
        webSocketService.disconnect()
    }

}

export default new Store()