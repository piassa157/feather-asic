import {MessageService, Message} from '../src/MessageService'


describe('Testing MessageService', () => {
    test('Should be execute messages', async () => {
        const messageClass = new MessageService()

        const messageTest: Message = {
            text: "Should be a message."
        }

        const messageInserted = await messageClass.create(messageTest);
        const getMessage = await messageClass.find();
        
        expect(messageInserted).toBe(getMessage[0])
    })
})