import { Request, Response } from 'express';
import createClaimCommand from "../../application/commands/create.claim.command";
import createClaimHandler from '../../application/handlers/create.claim.handler';

class CreateClaimAction {
    async run(req: Request, res: Response) {
      const { ownerId, title, description, categoryId, location, likeCount, dislikeCount } = req.body;
  
      try {
        if(!ownerId || !title || !description || !categoryId || !location || !likeCount || !dislikeCount){
          res.status(400).json({message: "Todos los campos son requeridos"});
          return
        }
        const command = new createClaimCommand(ownerId, title, description, categoryId, location, likeCount, dislikeCount);
        await createClaimHandler.execute(command);
  
        return res.status(201).json({ message: 'Claim created successfully' });
      } catch (error) {
        const { message } = error as Error;
        return res.status(400).json({ message: message });
      }
    }
  }
  
  export default new CreateClaimAction();
