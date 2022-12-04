module.exports = app => {

    const indexRouter = require('./index.routes')
    app.use('/', indexRouter)

    const authRouter = require('./auth.routes')
    app.use('/api/auth', authRouter)

    const userRouter = require('./user.routes')
    app.use('/api/user', userRouter)

}
