/* eslint-disable import/no-unresolved */
import { notFoundError } from '@/errors';
import ticketRepository from '@/repositories/ticket-repository';

async function getAllCategories() {
  const tickets = await ticketRepository.findAllCategories();
  if (!tickets) throw notFoundError();

  return tickets;
}

const ticketsService = {
  getAllCategories,
};

export default ticketsService;
