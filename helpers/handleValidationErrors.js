import { validationResult } from "express-validator"

export const ValidationErrors = (req, res, next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        res.status(400).json(errors.array())
    }

    next()
}