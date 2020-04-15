import {
    Request,
    Response,
    NextFunction,
} from 'express';
import * as HttpStatusCodes from 'http-status-codes';

import { heroesService } from '~service/modules/heroes/service';

async function get(req: Request, res: Response, next: NextFunction) {
    const { query } = req;
    let payload, status;
    try {
        payload = await heroesService.findAll(query);
        status = HttpStatusCodes.OK;
    } catch (e) {
        payload = {message: e.message};
        status = HttpStatusCodes.BAD_REQUEST;
    }
    res.body = payload;
    res.statusCode = status;
    next();
}

async function getElement(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    let payload, status;
    try {
        payload = await heroesService.findById(Number(id));
        status = HttpStatusCodes.OK;
    } catch (e) {
        payload = {message: e.message};
        status = HttpStatusCodes.BAD_REQUEST;
    }
    res.body = payload;
    res.statusCode = status;
    next();
}

async function post(req: Request, res: Response, next: NextFunction) {
    let payload, status;

    const { name } = req.body;
    try {
        payload = await heroesService.create({name});
        status = HttpStatusCodes.OK;
    } catch (e) {
        payload = {message: e.message};
        status = HttpStatusCodes.BAD_REQUEST;
    }
    res.body = payload;
    res.statusCode = status;
    next();
}

async function put(req: Request, res: Response, next: NextFunction) {
    let payload, status;

    const { id } = req.params;
    const { name } = req.body;
    try {
        payload = await heroesService.update(Number(id), {name});
        status = HttpStatusCodes.OK;
    } catch (e) {
        payload = {message: e.message};
        status = HttpStatusCodes.BAD_REQUEST;
    }
    res.body = payload;
    res.statusCode = status;
    next();
}

async function remove(req: Request, res: Response, next: NextFunction) {
    let payload, status;

    const { id } = req.params;
    try {
        payload = await heroesService.remove(Number(id));
        status = HttpStatusCodes.OK;
    } catch (e) {
        payload = {message: e.message};
        status = HttpStatusCodes.BAD_REQUEST;
    }
    res.body = payload;
    res.statusCode = status;
    next();
}


export const heroesHandler = {
    get,
    getElement,
    post,
    put,
    remove
};
