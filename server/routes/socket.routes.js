const ioRoutes = (io) => {

    io.on('connection', (socket) => {
        socket.on('ConnectRequest', (payload) => {
            const { room } = payload
            socket.join(room)
            socket.emit('ConnectResponse', { message: `You have conected to room: ${room}` })
        })

        socket.on('ConnectGeneral', () => {
            console.log('General Connection')
        })

        socket.on('Disconnect', ({ message }) => {
            console.log(message)
        })


    })


}

module.exports = ioRoutes