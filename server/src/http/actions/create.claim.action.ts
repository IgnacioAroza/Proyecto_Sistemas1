/*
import { createClaimCommand } from "../../application/commands/create.claim.command";
import { Request, Response } from 'express';

class CreateClaimAction {
    async run(req: Request, res: Response) {
      const { ownerId, title, description, categoryId, location } = req.body;
  
      try {
        const command = new createClaimCommand(ownerId, title, description, categoryId, location);
        await CreateClaimHandler.execute(command);
  
        return res.status(201).json({ message: 'Booking created successfully' });
      } catch (error) {
        const { message } = error as Error;
        res.status(400).json({ message: message });
      }
    }
  }
  
  export default new CreateClaimAction();
  */