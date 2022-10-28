import { prisma } from '@/config';

async function findAllCategories() {
  return prisma.category.findMany();
}

const ticketRepository = {
  findAllCategories,
};

export default ticketRepository;
