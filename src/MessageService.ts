export interface Message {
    id?: number
    text: string
}


export class MessageService {

    messages: Message[] = []


    async find() {
        return this.messages
    }


    async create(data: Pick<Message, 'text'>) {
        const message: Message = {
            id: this.messages.length,
            text: data.text
        }

        this.messages.push(message)

        return message;
    }
}


export default MessageService
