import { Response } from "express";
import claimRepository from "../../infrastructure/repositories/claim.repository";

class getOnFireClaimAction {
  public async run(res: Response) {
    try {
      const onFireClaims = await claimRepository.onFireLastHour();

      res.status(200).json(onFireClaims);
    } catch (error) {
      const { message } = error as Error;
      res.status(400).json({ message: message });
    }
  }
}

export default new getOnFireClaimAction();
