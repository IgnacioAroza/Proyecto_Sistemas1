import { Request, Response } from 'express';
import categoryRepository from '../../../src/infrastructure/repositories/category.repository';

class GetCategoriesAction {
    async run(_req: Request, res: Response) {
      try {
        const categories = await categoryRepository.getAll();
        return res.status(201).json(categories);
      } catch (error) {
        const { message } = error as Error;
        return res.status(400).json({ message: message });
      }
    }
  }

export default new GetCategoriesAction();