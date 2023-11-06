import { Request, Response } from "express";
import claimRepository from "infrastructure/repositories/claim.repository";

class findLastFiveClaimAction {
    public async run(_req: Request, res: Response){
        try{
            const lastClaims = await claimRepository.lastFiveClaimPost();
            res.status(200).json(lastClaims);
        }catch (error) {
            const { message } = error as Error;
            res.status(500).json({ message: message });
        }
    }
}

export default new findLastFiveClaimAction();