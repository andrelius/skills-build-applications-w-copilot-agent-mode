import { Router } from 'express';
import { Model } from 'mongoose';

export function createCrudRouter<T>(model: Model<T>) {
  const router = Router();

  router.get('/', async (_request, response) => {
    try {
      response.json(await model.find().sort({ createdAt: -1 }));
    } catch (error) {
      response.status(500).json({ error: 'Unable to fetch records' });
    }
  });

  router.post('/', async (request, response) => {
    try {
      const record = await model.create(request.body);
      response.status(201).json(record);
    } catch (error) {
      response.status(400).json({ error: 'Unable to create record' });
    }
  });

  return router;
}