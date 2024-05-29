import { Request, Response, NextFunction } from 'express'
import ErrorHandler from '../../handler/error/ErrorHandler'

export const errorMiddleware = (error: Error & Partial<ErrorHandler>, req: Request, res: Response, next: NextFunction) => {

    {
        const statusCode = error.statuscode || 500
        const message = error.statuscode && error.message
        res.status(statusCode).json({ message })
    }

}
