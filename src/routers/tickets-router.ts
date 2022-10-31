import { Router } from 'express';
import { getAccommodations, getCategories } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.get('/categories', getCategories);
ticketsRouter.get('/accommodations', getAccommodations);

export { ticketsRouter };
