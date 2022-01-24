import express from 'express'
import { locationsController } from './controller/locations-controller'
import { weatherDataController } from './controller/weatherdata-controller'

const app = express()
const port = 3000

app.get('/forecast', weatherDataController.forecast)

app.get('/locations', locationsController.list)

app.listen(port, () => {
    console.log(`Weather forecast app listening at http://localhost:${port}`)
})
