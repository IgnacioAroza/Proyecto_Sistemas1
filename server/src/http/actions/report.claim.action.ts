import { Request, Response } from 'express';
import { ReportClaimCommand } from '../../application/commands/report.claim.command';
import reportClaimHandler  from '../../application/handlers/report.claim.handler';

class ReportClaimAction {
    async run(req: Request, res: Response) {
      const { id, originalId } = req.body;
  
      try {
        const command = new ReportClaimCommand(id, originalId);
        await reportClaimHandler.execute(command);
  
        return res.status(201).json({ message: 'Claim created successfully' });
      } catch (error) {
        const { message } = error as Error;
        return res.status(400).json({ message: message });
      }
    }
  }
  
  export default new ReportClaimAction();