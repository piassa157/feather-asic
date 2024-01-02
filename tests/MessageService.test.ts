import {MessageService, Message} from '../src/MessageService'


describe('Testing MessageService', () => {
    test('Should be execute messages', async () => {
        const messageClass = new MessageService()

        const messageTestToInsert: Message = {
            text: "Should be a message."
        }
        const messageInserted = await messageClass.create(messageTestToInsert);
        
        expect(messageInserted.text).toBe(messageTestToInsert.text)
    })
})