import CreateLikeCommand from "../commands/create.like.command";
import claimRepository, { ClaimRepository } from "../../infrastructure/repositories/claim.repository";
import visitorRepository, { VisitorRepository } from "../../infrastructure/repositories/visitor.Repository";

export class CreateLikeHandler {
    private visitorRepository: VisitorRepository;
    private claimRepository: ClaimRepository;

    public constructor(
        visitorRepository: VisitorRepository,
        claimRepository: ClaimRepository,
    ){
        this.visitorRepository = visitorRepository;
        this.claimRepository = claimRepository;
    }

    public async execute(command: CreateLikeCommand): Promise<void> {
        const owner = await this.visitorRepository.findOneById(command.getOwner());

        if (!owner) {
            throw new Error('Owner does not exist');
        }

        if (!owner.pinMatch(command.getPin())) {
            throw new Error('Pin does not match');
        }
    
        const claim = await this.claimRepository.findOneById(command.getClaim());
    
        if (!claim) {
            throw new Error('Claim not found');
        }
    
        claim.addLike(command.getOwner());

        await this.claimRepository.save(claim);
    }
}

export default new CreateLikeHandler(visitorRepository, claimRepository);