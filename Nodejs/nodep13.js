const EventEmitter=require('events')
var e2=new EventEmitter()
e2.on('my',function(){
    console.log('my emitted')
})
e2.emit('my')