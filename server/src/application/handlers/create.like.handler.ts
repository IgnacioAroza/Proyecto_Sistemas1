import CreateLikeCommand from "application/commands/create.like.command";
import claimRepository, { ClaimRepository } from "infrastructure/repositories/claim.repository";
import visitorRepository, { VisitorRespository } from "infrastructure/repositories/visitor.repository";

class CreateLikeHandler {
    private visitorRepository: VisitorRespository;
    private claimRepository: ClaimRepository;

    public constructor(
        visitorRepository: VisitorRespository,
        claimRepository: ClaimRepository,
    ){
        this.visitorRepository = visitorRepository;
        this.claimRepository = claimRepository;
    }

    public async execute(command: CreateLikeCommand): Promise<void> {
        const ownerId = await this.visitorRepository.findOneById(command.getOwner());
        if (!ownerId) {
            throw new Error('Owner does not exist');
        }

        if(ownerId.pinMatch(command.getPin())){
            const claim = await this.claimRepository.findOneById(command.getClaim());
            claim?.addLike();
            if(claim != null){
                await this.claimRepository.save(claim);
            }
        }
        else{
            throw new Error('Pin does not match');
        }
    }
}

export default new CreateLikeHandler(visitorRepository, claimRepository);