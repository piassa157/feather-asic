import { feathers } from '@feathersjs/feathers'
import { koa, rest, bodyParser, errorHandler, serveStatic } from '@feathersjs/koa'
import socketio from '@feathersjs/socketio'
import {MessageService, Message} from './src/MessageService'


export type ServicesTypes = {
    messages: MessageService
}


const app = koa<ServicesTypes>(feathers())

app.use(serveStatic('.'))
app.use(errorHandler())
app.use(bodyParser())

app.configure(rest())
app.configure(socketio())

app.use('messages', new MessageService())


app.on('connectin', (connection) => app.channel('everybody').join(connection))


app.publish( (_data) => app.channel('everybody'))


app.listen(3030)
.then(() => console.log('My api is running on 3030 port'))

app.service('messages').on('created', (message: Message) => {
    console.log('A new message has been created, ', message)
})


export const main = async () => {
    await app.service('messages').create({
        text: "hello world 🌏"
    })

    await app.service('messages').create({
        text: "Linkin Park it's the best band!"
    })


    const messages = await app.service('messages').find()

    console.log("All messages registred: ", messages)
}


main()