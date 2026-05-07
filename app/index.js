import express from 'express'
import router from './routes/api'



const app = express()
const PORT = 8000


app.use('api', router)


app.listen(PORT, () => {
    console.log(`Listening on: ${PORT}`)
})



