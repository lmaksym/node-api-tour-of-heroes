import { Router } from 'express';

import { heroesHandler } from './handler';

export const heroesRouter = Router();

heroesRouter.get('/heroes', heroesHandler.get);
