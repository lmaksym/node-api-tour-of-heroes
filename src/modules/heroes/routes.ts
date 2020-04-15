import { Router } from 'express';

import { heroesHandler } from './handler';

export const heroesRouter = Router();

heroesRouter.get('/heroes', heroesHandler.get);
heroesRouter.post('/heroes', heroesHandler.post);
heroesRouter.get('/heroes/:id', heroesHandler.getElement);
heroesRouter.put('/heroes/:id', heroesHandler.put);
heroesRouter.delete('/heroes/:id', heroesHandler.remove);
