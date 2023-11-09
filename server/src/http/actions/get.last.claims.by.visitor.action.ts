import { Request, Response } from "express";
import claimRepository from "../../infrastructure/repositories/claim.repository";
import visitorRespository from "../../infrastructure/repositories/visitor.Repository";

class getLastClaimsByVisitor {
    public async run(req: Request, res:Response){
        try{
            const visitorId = req.params["visitorId"];
            if(!visitorId){
                res.status(500).json({ message:"Visitante no es valido"});
                return;
            }
            const visitor = await visitorRespository.findOneById(visitorId);
            if(!visitor){
                res.status(500).json({ message:"El visitante no fue encontrado"});
                return;
            }
            const last5Visitor = await claimRepository.listLastFiveClaimsByVisitor(visitor);
            res.status(200).json(last5Visitor);
        }catch (error){
            const { message } = error as Error;
            res.status(500).json({ message:message });
        }
    }
}

export default new getLastClaimsByVisitor();