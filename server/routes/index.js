module.exports = app => {

    const indexRouter = require('./index.routes')
    app.use('/', indexRouter)

    const authRouter = require('./auth.routes')
    app.use('/api/auth', authRouter)

    const userRouter = require('./user.routes')
    app.use('/api/user', userRouter)

    const tripRouter = require('./trip.routes')
    app.use('/api/trip', tripRouter)

    const commentRouter = require('./comment.routes')
    app.use('/api/user', commentRouter)

    const carRouter = require('./comment.routes')
    app.use('/api/car', commentRouter) //????????????


}
