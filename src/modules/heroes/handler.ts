import {
    Request,
    Response,
    NextFunction,
} from 'express';
import * as HttpStatusCodes from 'http-status-codes';

async function get(req: Request, res: Response, next: NextFunction) {

    res.body = {};
    res.statusCode = HttpStatusCodes.OK;
    next();
}

async function post(req: Request, res: Response, next: NextFunction) {

    res.body = {};
    res.statusCode = HttpStatusCodes.OK;
    next();
}

async function put(req: Request, res: Response, next: NextFunction) {

    res.body = {};
    res.statusCode = HttpStatusCodes.OK;
    next();
}

async function remove(req: Request, res: Response, next: NextFunction) {

    res.body = {};
    res.statusCode = HttpStatusCodes.OK;
    next();
}


export const heroesHandler = {
    get,
    post,
    put,
    remove
};
