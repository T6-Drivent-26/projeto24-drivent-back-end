/* eslint-disable import/no-unresolved */
import { notFoundError } from '@/errors';
import ticketRepository from '@/repositories/ticket-repository';

async function getAllCategories() {
  const tickets = await ticketRepository.findAllCategories();
  if (!tickets) throw notFoundError();

  return tickets;
}

async function getAllAccomodations() {
  const accommodations = await ticketRepository.findAllAccommodations();
  if (!accommodations) throw notFoundError();

  return accommodations;
}

const ticketsService = {
  getAllCategories,
  getAllAccomodations,
};

export default ticketsService;
