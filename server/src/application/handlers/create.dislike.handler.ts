import CreateDislikeCommand from "application/commands/create.dislike.command";
import claimRepository, { ClaimRepository } from "infrastructure/repositories/claim.repository";
import visitorRepository, { VisitorRepository } from "infrastructure/repositories/visitor.Repository";

class CreateDislikeHandler {
    private visitorRepository: VisitorRepository;
    private claimRepository: ClaimRepository;

    public constructor(
        visitorRepository: VisitorRepository,
        claimRepository: ClaimRepository,
    ){
        this.visitorRepository = visitorRepository;
        this.claimRepository = claimRepository;
    }

    public async execute(command: CreateDislikeCommand): Promise<void> {
        const ownerId = await this.visitorRepository.findOneById(command.getOwner());
        if (!ownerId) {
            throw new Error('Owner does not exist');
        }

        if (!ownerId.pinMatch(command.getPin())) {
            throw new Error('Pin does not match');
        }
    
        const claim = await this.claimRepository.findOneById(command.getClaim());
    
        if (!claim) {
            throw new Error('Claim not found');
        }
    
        claim.addDislike(ownerId.getId());
        await this.claimRepository.save(claim);
    }
}

export default new CreateDislikeHandler(visitorRepository, claimRepository);