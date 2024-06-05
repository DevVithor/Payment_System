import { Request, Response, NextFunction } from 'express'
import ErrorHandler from '../../handler/error/ErrorHandler'
import { ZodError } from 'zod'

export const errorMiddleware = (error: Error & Partial<ErrorHandler>, req: Request, res: Response, next: NextFunction) => {

    {
        const statusCode = error.statuscode || 500
        const message = error.message
        if (error instanceof ZodError) {
            res.status(400).json(error.errors)
        }
        res.status(statusCode).json({ message })
    }

}
