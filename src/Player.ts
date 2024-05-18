import { randomUUID } from "crypto"

export class Player {

    uuid
    socketId

    constructor(socketId: string){
        this.uuid = randomUUID()
        this.socketId = socketId
    }
}