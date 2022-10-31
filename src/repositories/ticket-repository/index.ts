import { prisma } from '@/config';

async function findAllCategories() {
  return prisma.category.findMany();
}

async function findAllAccommodations() {
  return prisma.accommodation.findMany();
}

const ticketRepository = {
  findAllCategories,
  findAllAccommodations,
};

export default ticketRepository;
