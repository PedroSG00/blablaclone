module.exports = app => {

    const indexRouter = require('./index.routes')
    app.use('/', indexRouter)

    const authRouter = require('./auth.routes')
    app.use('/api/auth', authRouter)

    const tripRouter = require("./trip.routes")
    app.use("/api/trip", tripRouter)
}
