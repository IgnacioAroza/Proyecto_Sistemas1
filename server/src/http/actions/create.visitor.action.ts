import { Request, Response } from 'express';
import { CreateVisitorCommand } from '../../application/commands/create.visitor.command';
import createVisitorgHandler from '../../application/handlers/create.visitor.handler';

class CreateVisitorAction {
  async run(req: Request, res: Response) {
    const { owner, passengers, accomodation, from, to } = req.body;

    try {
      const command = new CreateVisitorCommand(owner, passengers, accomodation, from, to);
      await createVisitorgHandler.execute(command);

      return res.status(201).json({ message: 'Visitor created successfully' });
    } catch (error) {
      const { message } = error as Error;
      res.status(400).json({ message: message });
    }
  }
}

export default new CreateVisitorAction();
