import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getEnrollmentByUser, postCreateOrUpdateEnrollment } from '@/controllers';
import { createEnrollmentSchema } from '@/schemas';

const enrollmentsRouter = Router();

enrollmentsRouter
  .all('/*', authenticateToken)
  .get('/', getEnrollmentByUser)
  .post('/', validateBody(createEnrollmentSchema), postCreateOrUpdateEnrollment);

export { enrollmentsRouter };
