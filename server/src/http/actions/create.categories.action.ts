import { Request, Response } from 'express';
import getCategoriesCommand from '../../application/commands/get.categories.command';
import getCategoriesHandler from '../../application/handlers/get.categories.handler';

class CreateCategoriesAction {
    async run(req: Request, res: Response) {
        const { nameId, color } = req.body;
        try {
            if(!nameId || !color){
                res.status(400).json({message: "Todos los campos son requeridos"});
                return
            }
        const command = new getCategoriesCommand(nameId, color);
        await getCategoriesHandler.execute(command);
        return res.status(201).json({ message: 'Category created successfully' });
        } catch (error) {
            const { message } = error as Error;
            return res.status(400).json({ message: message });
        }
    }
}  
export default new CreateCategoriesAction();
