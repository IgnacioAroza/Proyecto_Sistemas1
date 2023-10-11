import { Request, Response } from 'express';
import CreateDislikeCommand from '../../application/commands/create.dislike.command';
import CreateDislikeHandler from '../../application/handlers/create.dislike.handler'

class CreateDislikeAction {
    async run(req: Request, res: Response){
        const { ownerId, dislikeCount, pin, claimId } = req.body;

        try {
            const command = new CreateDislikeCommand(ownerId, dislikeCount, pin, claimId);
            await CreateDislikeHandler.execute(command);
            return res.status(201).json({ message: 'Dislike created'});
        }catch (error) {
            const { message } = error as Error;
            return res.status(400).json({ message: message });
        }
    }
}

export default new CreateDislikeAction();