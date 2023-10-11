import { Request, Response } from 'express';
import CreateVisitorCommand from '../../application/commands/create.visitor.command';
import createVisitorgHandler from '../../application/handlers/create.visitor.handler';

class CreateVisitorAction {
  async run(req: Request, res: Response) {
    const { ipId, nickname, pin} = req.body;

    try {
      const command = new CreateVisitorCommand(ipId, nickname, pin);
      await createVisitorgHandler.execute(command);

      return res.status(201).json({ message: 'Visitor created successfully' });
    } catch (error) {
      const { message } = error as Error;
      return res.status(400).json({ message: message });
    }
  }
}

export default new CreateVisitorAction();
