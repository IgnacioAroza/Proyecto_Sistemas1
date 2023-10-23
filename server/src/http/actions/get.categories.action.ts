import { Request, Response } from 'express';
import getCategoriesCommand from '../../application/commands/get.categories.command';
import getCategoriesHandler from '../../application/handlers/get.categories.handler';

class CreateClaimAction {
    async run(req: Request, res: Response) {
      const { name, color } = req.body;

      try {
        const command = new getCategoriesCommand(name, color);
        await getCategoriesHandler.execute(command);

        return res.status(201).json({ message: 'Claim created successfully' });
      } catch (error) {
        const { message } = error as Error;
        return res.status(400).json({ message: message });
      }
    }
  }

  export default new CreateClaimAction();