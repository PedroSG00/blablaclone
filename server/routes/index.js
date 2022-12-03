module.exports = app => {

    const indexRouter = require('./index.routes')
    app.use('/', indexRouter)


}
