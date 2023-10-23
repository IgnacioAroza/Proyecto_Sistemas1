import { Request, Response } from 'express';


class CreateOnFireClaimAction {
    async run(req: Request, res: Response) {
      const {  } = req.body;
  
      try {
        //const command = new CreateOnFireClaimAction();
        //await createOnFireClaimHandler.execute(command);
  
        return res.status(201).json({ message: 'Claim created successfully' });
      } catch (error) {
        const { message } = error as Error;
        return res.status(400).json({ message: message });
      }
    }
  }
  
  export default new CreateOnFireClaimAction();
