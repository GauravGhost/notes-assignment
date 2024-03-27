const app = require('./app')
const {PORT} = require('./config/server.config')
const {connect} = require('./config/db.config')

app.listen(PORT, async ()=>{
    console.log(`Server Started at ${PORT}`)
    await connect();
    console.log(`Database connected Successfully`)
})