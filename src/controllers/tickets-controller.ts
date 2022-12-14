import ticketsService from '@/services/tickets-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getCategories(req: Request, res: Response) {
  const categories = await ticketsService.getAllCategories();

  return res.status(httpStatus.OK).send(categories);
}

export async function getAccommodations(req: Request, res: Response) {
  const accommodations = await ticketsService.getAllAccomodations();

  return res.status(httpStatus.OK).send(accommodations);
}
