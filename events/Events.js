import { EventEmitter, errorMonitor } from 'node:events';

const event = new EventEmitter()
event.setMaxListeners(15)

const someFunc =  () =>{
    console.log('this is my event0 in function') 
}
//  event.on('myEvent',someFunc)

// event.on('myEvent',someFunc)

// event.on('myEvent',() =>{
//     console.log('this is my event2')
// })
// event.on('myEvent',() =>{
//     console.log('this is my event3')
// })

// event.on('myEvent2',() =>{
//     console.log('This is myEvent2.')
// })

// console.log(event.listeners('myEvent'))
// console.log(event.eventNames())
// event.prependOnceListener('myEvent2',() =>{
//     console.log('prepend myEvent2')
// })
// console.log(event.listeners('myEvent2'))
// event.on('myEvent',() =>{
//     console.log('this is my event4')
// })
// event.on('myEvent',() =>{
//     console.log('this is my event5')
// })
// event.on('myEvent',() =>{
//     console.log('this is my event6')
// })
// event.on('myEvent',() =>{
//     console.log('this is my event7')
// })
// event.on('myEvent',() =>{
//     console.log('this is my event8')
// })
// event.on('myEvent',() =>{
//     console.log('this is my event9')
// })
// event.on('myEvent',() =>{
//     console.log('this is my event10')
// })
// event.on('myEvent',() =>{
//     console.log('this is my event11')
// })

// event.removeListener('myEvent',someFunc)
// event.removeListener('myEvent',someFunc)
// event.emit('myEvent')
// event.emit('myEvent2')
// event.removeAllListeners('myEvent')
// event.emit('myEvent')


// ---------------calling event for once ---------------------------
// event.once('myEvent',someFunc)
// event.emit('myEvent')
// event.emit('myEvent')
// event.emit('myEvent')
// ------------------------------------------------------------------

// ------------------error---------------------------------
// event.on('error',(err) =>{
// console.error(err)
// })

// event.emit('error',new Error('whoops'))

// event.on(errorMonitor,(err)=>{
//     MyMonitoringTool.log(err);

// })

// event.emit('error', new Error('wer'))
// -----------------------------------------------------------

event.on('myEvent',someFunc)
event.on('myEvent',someFunc)
// event.emit('myEvent')
event.removeAllListeners('myEvent',someFunc)
event.emit('myEvent')
event.emit('myEvent')
