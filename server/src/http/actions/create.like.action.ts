import { Request, Response } from 'express';

class CreateLikeAction {
    async run(req: Request, res: Response){
        const { likeCount, dislikeCount } = req.body;

        try {
            // const command = new createLikeCommand(likeCount, dislikeCount);
            // await LikeHandler.execute(command);

            return res.status(201).json({ message: 'Like created'});
        }catch (error) {
            const { message } = error as Error;
            res.status(400).json({ message: message });
        }
    }
}

export default new CreateLikeAction();