import { Request, Response } from 'express';
import CreateLikeCommand from '../../application/commands/create.like.command';
import CreateLikeHandler from '../../application/handlers/create.like.handler'

class CreateLikeAction {
    async run(req: Request, res: Response){
        const { ownerId, pin, claimId } = req.body;

        try {
            const command = new CreateLikeCommand(ownerId, pin, claimId);
            await CreateLikeHandler.execute(command);

            return res.status(201).json({ message: 'Like created'});
        }catch (error) {
            const { message } = error as Error;
            return res.status(400).json({ message: message });
        }
    }
}

export default new CreateLikeAction();