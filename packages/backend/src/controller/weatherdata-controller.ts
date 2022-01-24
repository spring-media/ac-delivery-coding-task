import { Request, Response } from 'express'

export const weatherDataController = {
    forecast: (req: Request, res: Response) => {
        res.send('NOT IMPLEMENTED: Weather data GET')
    }
}
