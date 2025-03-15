import { IGame } from "../types/game";

let socket: WebSocket | null = null;
let reconnectAttempts = 0
const MAX_RECCONECT_ATTEMPTS = 5
const RECCONECT_INTERVAL = 3000

const connect = (url: string, onMessage: (data: IGame[]) => void) => {
    if(socket) return

    socket = new WebSocket(url)

    socket.onmessage = (event) => {
            const data = JSON.parse(event.data).data
            onMessage(data)
    }
    socket.onerror = (error) => console.error(error);

    socket.onclose = () => {
       if(socket) {
        socket.onmessage = null
        socket.onerror = null
        socket.onclose = null
       }
        socket = null
        if(reconnectAttempts < MAX_RECCONECT_ATTEMPTS) {
            reconnectAttempts++
            setTimeout(() => connect(url, onMessage), RECCONECT_INTERVAL)
        } else {
            console.warn("Max reconnect attempts reached. WebSocket will not reconnect.");
        }

    }
}

const disconnect = () => {
    if(socket) {
        socket.onmessage = null;
        socket.onerror = null;
        socket.onclose = null;
        socket.close()
        socket = null
    }
}

export default {connect, disconnect}