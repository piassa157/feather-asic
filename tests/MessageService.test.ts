import {MessageService, Message} from '../src/MessageService'


describe('Testing MessageService', () => {
    const messageClass = new MessageService()

    const messageTestToInsert: Message = {
        text: "Should be a message."
    }

    test('Should be execute messages', async () => {
     
        const messageInserted = await messageClass.create(messageTestToInsert);
        
        expect(messageInserted.text).toBe(messageTestToInsert.text)
    })


    test('Should be return  message inserted', async () => {
        const getMesssageInserted = await messageClass.find();
        
        expect(getMesssageInserted[0].text).toBe(messageTestToInsert.text)
    })
})