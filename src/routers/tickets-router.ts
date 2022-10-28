import { Router } from 'express';
import { getCategories } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.get('/categories', getCategories);

export { ticketsRouter };
