const app = require('./app')
const {PORT} = require('./config/server.config')


app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}`)
})