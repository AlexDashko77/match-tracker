import { IGame } from "../types/game";

let socket: WebSocket | null = null;

const connect = (url: string, onMessage: (data: IGame[]) => void) => {
    if(socket) return

    socket = new WebSocket(url)

    socket.onmessage = (event) => {
            const data = JSON.parse(event.data).data
            onMessage(data)
    }
    socket.onerror = (error) => console.error(error);

    socket.onclose = () => {
        socket = null
        setTimeout(() => connect(url, onMessage), 3000)
    }
}

const disconnect = () => {
    if(socket) {
        socket.close()
        socket = null
    }
}

export default {connect, disconnect}